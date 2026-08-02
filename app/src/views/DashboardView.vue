<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import {
  collection, query, where,
  onSnapshot, addDoc, deleteDoc, doc, serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase";
import { user, userProfile } from "../composables/useAuth";
import NavBar from "../components/NavBar.vue";

// ── Tabs ──
const activeTab = ref("submissions"); // 'submissions' | 'mistakes' | 'codes'

// ── Submissions ──
const submissions = ref([]);
const searchQuery = ref("");
const selected = ref(null);
const selectedMistakeStudentId = ref("");
let unsubSubmissions = null;

// ── Codes ──
const codes = ref([]);
const generatingCode = ref(false);
const lastCopiedCode = ref("");
let unsubCodes = null;

const subscribeSubmissions = (uid) => {
  if (unsubSubmissions) unsubSubmissions();
  const q = query(collection(db, "submissions"), where("teacherId", "==", uid));
  unsubSubmissions = onSnapshot(q, (snap) => {
    const docs = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
    docs.sort((a, b) => (b.submittedAt?.seconds ?? 0) - (a.submittedAt?.seconds ?? 0));
    submissions.value = docs;
  }, (err) => {
    console.error("submissions listener:", err);
    window.setTimeout(() => subscribeSubmissions(uid), 3000);
  });
};

const subscribeCodes = (uid) => {
  if (unsubCodes) unsubCodes();
  const q = query(collection(db, "codes"), where("teacherId", "==", uid));
  unsubCodes = onSnapshot(q, (snap) => {
    const docs = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
    // Null createdAt = pending write = just created → sort to top (MAX_SAFE_INTEGER)
    docs.sort((a, b) =>
      (b.createdAt?.seconds ?? Number.MAX_SAFE_INTEGER) -
      (a.createdAt?.seconds ?? Number.MAX_SAFE_INTEGER)
    );
    codes.value = docs;
  }, (err) => {
    console.error("codes listener:", err);
    window.setTimeout(() => subscribeCodes(uid), 3000);
  });
};

onMounted(() => {
  const uid = user.value?.uid;
  if (!uid) return;
  subscribeSubmissions(uid);
  subscribeCodes(uid);
});

onBeforeUnmount(() => {
  if (unsubSubmissions) unsubSubmissions();
  if (unsubCodes) unsubCodes();
});

// ── Submissions computed ──
const filtered = computed(() => {
  const q = searchQuery.value.trim().toLowerCase();
  if (!q) return submissions.value;
  return submissions.value.filter((s) =>
    s.studentName?.toLowerCase().includes(q)
  );
});

const totalSubmissions = computed(() => submissions.value.length);
const uniqueStudents = computed(
  () => new Set(submissions.value.map((s) => s.studentId)).size
);
const todayCount = computed(() => {
  const today = new Date().toDateString();
  return submissions.value.filter(
    (s) => s.submittedAt?.toDate?.()?.toDateString?.() === today
  ).length;
});

const isBuildSentence = (submission) => submission.type === "build-sentence";

const submissionTitle = (submission) => {
  if (isBuildSentence(submission)) return submission.subjectField || "Build a Sentence";
  return submission.subjectField || submission.toField || "—";
};

const submissionMetric = (submission) => {
  if (isBuildSentence(submission)) {
    return `${submission.correctCount ?? 0}/${submission.totalQuestions ?? "—"} (${submission.accuracy ?? "—"}%)`;
  }
  return submission.wordCount ?? "—";
};

const submissionTypeLabel = (submission) => (
  isBuildSentence(submission) ? "Build a Sentence" : "写作"
);

const buildSentenceSubmissions = computed(() =>
  submissions.value.filter((s) => isBuildSentence(s) && Array.isArray(s.buildSentenceAnswers))
);

const mistakeBookItems = computed(() => {
  const itemsByQuestion = new Map();
  buildSentenceSubmissions.value.forEach((submission) => {
    submission.buildSentenceAnswers
      .filter((answer) => answer && answer.isCorrect === false)
      .forEach((answer) => {
        const key = [
          submission.studentId || "unknown",
          submission.quizFile || submission.question || submission.subjectField || "Build a Sentence",
          answer.number || answer.question || "",
        ].join("|");
        const existing = itemsByQuestion.get(key);
        const submittedSeconds = submission.submittedAt?.seconds ?? 0;
        const item = {
          key,
          studentId: submission.studentId || "",
          studentName: submission.studentName || "未命名学生",
          quizLabel: submission.question || submission.subjectField || "Build a Sentence",
          quizFile: submission.quizFile || "",
          number: answer.number || "—",
          question: answer.question || "",
          blankSentence: answer.blankSentence || "",
          wordBank: Array.isArray(answer.wordBank) ? answer.wordBank : [],
          firstWrongAt: existing?.firstWrongAt || submission.submittedAt,
          lastWrongAt: submission.submittedAt,
          lastWrongSeconds: submittedSeconds,
          wrongCount: (existing?.wrongCount || 0) + 1,
        };
        if (existing && (existing.lastWrongSeconds || 0) > submittedSeconds) {
          item.lastWrongAt = existing.lastWrongAt;
          item.lastWrongSeconds = existing.lastWrongSeconds;
        }
        itemsByQuestion.set(key, item);
      });
  });

  return Array.from(itemsByQuestion.values()).sort((a, b) => {
    const nameCompare = a.studentName.localeCompare(b.studentName, "zh-CN");
    if (nameCompare) return nameCompare;
    const quizCompare = a.quizLabel.localeCompare(b.quizLabel, "zh-CN");
    if (quizCompare) return quizCompare;
    return Number(a.number) - Number(b.number);
  });
});

const mistakeStudents = computed(() => {
  const students = new Map();
  mistakeBookItems.value.forEach((item) => {
    const key = item.studentId || item.studentName;
    if (!students.has(key)) {
      students.set(key, { id: item.studentId, name: item.studentName, count: 0 });
    }
    students.get(key).count++;
  });
  return Array.from(students.values()).sort((a, b) => a.name.localeCompare(b.name, "zh-CN"));
});

const filteredMistakeBook = computed(() => {
  if (!selectedMistakeStudentId.value) return mistakeBookItems.value;
  return mistakeBookItems.value.filter((item) => item.studentId === selectedMistakeStudentId.value);
});

// ── Codes computed ──
const availableCodes = computed(() => codes.value.filter((c) => !c.used).length);

// ── Generate code ──
const generateCode = async () => {
  generatingCode.value = true;
  try {
    const code = Math.random().toString(36).substring(2, 8).toUpperCase();
    await addDoc(collection(db, "codes"), {
      code,
      teacherId: user.value.uid,
      teacherName: userProfile.value?.name || "",
      used: false,
      usedBy: null,
      usedByName: null,
      createdAt: serverTimestamp(),
    });
    // Auto-copy the new code
    try { await navigator.clipboard.writeText(code); } catch {}
    lastCopiedCode.value = code;
    window.setTimeout(() => { lastCopiedCode.value = ""; }, 3000);
  } catch (err) {
    console.error("generateCode:", err);
    window.alert(`生成失败：${err.message}\n\n请检查 Firestore 安全规则是否已配置。`);
  } finally {
    generatingCode.value = false;
  }
};

// ── Delete code ──
const deleteCode = async (c) => {
  if (c.used) return;
  try {
    await deleteDoc(doc(db, "codes", c.id));
  } catch (err) {
    window.alert(`删除失败：${err.message}`);
  }
};

// ── Markdown renderer ──
const renderMarkdown = (text) => {
  if (!text) return "";
  const processInline = (s) =>
    s
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  const lines = text.split("\n");
  const parts = [];
  let inList = false;
  for (const line of lines) {
    const t = line.trim();
    if (t.startsWith("* ") || t.startsWith("- ")) {
      if (!inList) { parts.push("<ul>"); inList = true; }
      parts.push(`<li>${processInline(t.slice(2))}</li>`);
    } else {
      if (inList) { parts.push("</ul>"); inList = false; }
      if (t === "") parts.push('<div class="md-gap"></div>');
      else parts.push(`<p>${processInline(t)}</p>`);
    }
  }
  if (inList) parts.push("</ul>");
  return parts.join("");
};

// ── Download submission ──
const escapeHtml = (text = "") =>
  text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");

const downloadSubmission = (s) => {
  const now = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  const ts = `${now.getFullYear()}${pad(now.getMonth()+1)}${pad(now.getDate())}_${pad(now.getHours())}${pad(now.getMinutes())}`;
  const safeName = (s.studentName || "Student").replace(/[\\/:*?"<>|]/g, "_");
  const safeSubject = (s.subjectField || "").replace(/[\\/:*?"<>|]/g, "_");
  const filename = safeSubject
    ? `${safeName}_${safeSubject}_${ts}.doc`
    : `${safeName}_${ts}.doc`;

  const html = `<html><meta charset="utf-8"><body>
    <h2 style="color:#4a90e2;">TOEFL Practice Report</h2>
    <p><b>Student:</b> ${escapeHtml(s.studentName)}</p>
    <p><b>Type:</b> ${escapeHtml(submissionTypeLabel(s))}</p>
    <p><b>To:</b> ${escapeHtml(s.toField || "—")} &nbsp;&nbsp; <b>Subject:</b> ${escapeHtml(s.subjectField || "—")}</p>
    <p><b>${isBuildSentence(s) ? "Score" : "Word Count"}:</b> ${escapeHtml(String(submissionMetric(s)))} &nbsp;&nbsp; <b>Time Used:</b> ${formatTime(s.timeUsedSeconds)}</p>
    <p><b>Submitted:</b> ${formatDate(s.submittedAt)}</p>
    ${s.question ? `<hr><h3>${isBuildSentence(s) ? "Practice" : "Question"}:</h3><p>${escapeHtml(s.question).replace(/\n/g,"<br>")}</p>` : ""}
    <hr><h3>${isBuildSentence(s) ? "Build a Sentence Record" : "Student Response"}:</h3><p>${escapeHtml(s.answer).replace(/\n/g,"<br>")}</p>
  </body></html>`;

  const blob = new Blob(["\ufeff", html], { type: "application/msword" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
  window.setTimeout(() => URL.revokeObjectURL(link.href), 1000);
};

const buildMistakeBookFilename = () => {
  const now = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  const ts = `${now.getFullYear()}${pad(now.getMonth()+1)}${pad(now.getDate())}_${pad(now.getHours())}${pad(now.getMinutes())}`;
  const student = mistakeStudents.value.find((item) => item.id === selectedMistakeStudentId.value);
  const safeName = (student?.name || "All_Students").replace(/[\\/:*?"<>|]/g, "_");
  return `${safeName}_Build_Sentence_错题本_${ts}.doc`;
};

const formatSecondsAsMinutes = (seconds) => {
  const s = Math.max(0, Math.round(seconds));
  return `${Math.floor(s / 60)}分${String(s % 60).padStart(2, "0")}秒`;
};

const downloadMistakeBook = () => {
  const items = filteredMistakeBook.value;
  if (items.length === 0) {
    window.alert("当前没有可导出的 Build Sentence 错题。");
    return;
  }
  const groups = [];
  for (let i = 0; i < items.length; i += 10) {
    groups.push(items.slice(i, i + 10));
  }
  const htmlGroups = groups.map((group, groupIndex) => {
    const suggestedSeconds = group.length * 41;
    const rows = group.map((item, index) => `
      <div style="margin: 0 0 18px;">
        <p><b>${groupIndex * 10 + index + 1}. ${escapeHtml(item.quizLabel)} - 第 ${escapeHtml(String(item.number))} 题</b></p>
        <p>${escapeHtml(item.question)}</p>
        ${item.blankSentence ? `<p>${escapeHtml(item.blankSentence)}</p>` : ""}
        ${item.wordBank.length ? `<p><b>Word Bank:</b> ${escapeHtml(item.wordBank.join(" / "))}</p>` : ""}
      </div>
    `).join("");
    return `
      <h3>第 ${groupIndex + 1} 组：${group.length} 题，建议限时 ${formatSecondsAsMinutes(suggestedSeconds)}</h3>
      ${rows}
      <hr>
    `;
  }).join("");

  const student = mistakeStudents.value.find((item) => item.id === selectedMistakeStudentId.value);
  const html = `<html><meta charset="utf-8"><body>
    <h2 style="color:#1a1a1a;">Build a Sentence 错题本</h2>
    <p><b>学生:</b> ${escapeHtml(student?.name || "全部学生")}</p>
    <p><b>说明:</b> 本错题本只收录曾经做错的题目，不含正确答案。每 10 题为一组；不足 10 题按每题 41 秒建议计时。</p>
    <p><b>错题数量:</b> ${items.length}</p>
    <hr>
    ${htmlGroups}
  </body></html>`;

  const blob = new Blob(["\ufeff", html], { type: "application/msword" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = buildMistakeBookFilename();
  link.click();
  window.setTimeout(() => URL.revokeObjectURL(link.href), 1000);
};

// ── Formatters ──
const formatDate = (ts) => {
  if (!ts?.toDate) return "—";
  return ts.toDate().toLocaleString("zh-CN", {
    month: "2-digit", day: "2-digit",
    hour: "2-digit", minute: "2-digit",
  });
};

const formatTime = (seconds) => {
  if (!seconds && seconds !== 0) return "—";
  const s = Math.abs(Math.round(seconds));
  return `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
};
</script>

<template>
  <NavBar />

  <div class="dash-wrapper">
    <!-- Stats row -->
    <div class="dash-stats">
      <div class="stat-card">
        <div class="stat-num">{{ totalSubmissions }}</div>
        <div class="stat-label">总提交数</div>
      </div>
      <div class="stat-card">
        <div class="stat-num">{{ uniqueStudents }}</div>
        <div class="stat-label">学生人数</div>
      </div>
      <div class="stat-card">
        <div class="stat-num">{{ todayCount }}</div>
        <div class="stat-label">今日提交</div>
      </div>
      <div class="stat-card">
        <div class="stat-num">{{ availableCodes }}</div>
        <div class="stat-label">可用邀请码</div>
      </div>
    </div>

    <!-- Tabs -->
    <div class="dash-tabs">
      <button class="dash-tab" :class="{ active: activeTab === 'submissions' }" @click="activeTab = 'submissions'">学生作答</button>
      <button class="dash-tab" :class="{ active: activeTab === 'mistakes' }" @click="activeTab = 'mistakes'">错题本</button>
      <button class="dash-tab" :class="{ active: activeTab === 'codes' }" @click="activeTab = 'codes'">邀请码管理</button>
    </div>

    <!-- ── Submissions tab ── -->
    <template v-if="activeTab === 'submissions'">
      <div class="dash-toolbar">
        <input v-model="searchQuery" class="dash-search" type="text" placeholder="按学生姓名搜索…">
      </div>
      <div class="dash-table-wrap">
        <table class="dash-table">
          <thead>
            <tr>
              <th>学生</th>
              <th>主题 / Subject</th>
              <th>字数 / 正确率</th>
              <th>用时</th>
              <th>提交时间</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="s in filtered" :key="s.id" class="dash-row" @click="selected = s">
              <td>{{ s.studentName }}</td>
              <td>
                <span v-if="isBuildSentence(s)" class="submission-type-badge">Build</span>
                {{ submissionTitle(s) }}
              </td>
              <td>{{ submissionMetric(s) }}</td>
              <td>{{ formatTime(s.timeUsedSeconds) }}</td>
              <td>{{ formatDate(s.submittedAt) }}</td>
            </tr>
            <tr v-if="filtered.length === 0">
              <td colspan="5" class="dash-empty">暂无提交记录</td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>

    <!-- ── Mistake book tab ── -->
    <template v-else-if="activeTab === 'mistakes'">
      <div class="mistake-book-toolbar">
        <div>
          <div class="mistake-book-title">Build a Sentence 错题本</div>
          <div class="mistake-book-hint">只收录学生曾经做错的题，不展示正确答案。后续改对也会保留在错题本里。</div>
        </div>
        <div class="mistake-book-actions">
          <select v-model="selectedMistakeStudentId" class="mistake-student-select">
            <option value="">全部学生</option>
            <option v-for="student in mistakeStudents" :key="student.id || student.name" :value="student.id">
              {{ student.name }}（{{ student.count }}题）
            </option>
          </select>
          <button class="mistake-download-btn" @click="downloadMistakeBook">下载错题本 .doc</button>
        </div>
      </div>

      <div class="mistake-book-note">
        计时建议：每 10 题一组，每组 6 分 50 秒；最后不足 10 题按每题 41 秒计时。
      </div>

      <div class="dash-table-wrap">
        <table class="dash-table mistake-table">
          <thead>
            <tr>
              <th>学生</th>
              <th>真题</th>
              <th>题号</th>
              <th>错题</th>
              <th>词库</th>
              <th>错过次数</th>
              <th>最近错题时间</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in filteredMistakeBook" :key="item.key">
              <td>{{ item.studentName }}</td>
              <td>{{ item.quizLabel }}</td>
              <td>{{ item.number }}</td>
              <td class="mistake-question-cell">
                <div>{{ item.question }}</div>
                <div v-if="item.blankSentence" class="mistake-blank-sentence">{{ item.blankSentence }}</div>
              </td>
              <td class="mistake-wordbank">{{ item.wordBank.join(" / ") || "—" }}</td>
              <td>{{ item.wrongCount }}</td>
              <td>{{ formatDate(item.lastWrongAt) }}</td>
            </tr>
            <tr v-if="filteredMistakeBook.length === 0">
              <td colspan="7" class="dash-empty">暂无 Build a Sentence 错题记录</td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>

    <!-- ── Codes tab ── -->
    <template v-else>
      <div class="codes-toolbar">
        <button class="generate-btn" :disabled="generatingCode" @click="generateCode">
          {{ generatingCode ? "生成中…" : "+ 生成新邀请码" }}
        </button>
        <span v-if="lastCopiedCode" class="codes-copied-notice">✓ 已复制：{{ lastCopiedCode }}</span>
        <span v-else class="codes-hint">生成后自动复制到剪贴板，每码限用一次。</span>
      </div>
      <div class="dash-table-wrap">
        <table class="dash-table">
          <thead>
            <tr>
              <th>邀请码</th>
              <th>状态</th>
              <th>使用学生</th>
              <th>生成时间</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="c in codes" :key="c.id" class="codes-row" :class="{ 'codes-row-new': c.code === lastCopiedCode }">
              <td>
                <span class="code-badge" :class="{ 'code-used': c.used }">{{ c.code }}</span>
              </td>
              <td>
                <span class="code-status" :class="c.used ? 'status-used' : 'status-available'">
                  {{ c.used ? "已使用" : "可用" }}
                </span>
              </td>
              <td>{{ c.usedByName || "—" }}</td>
              <td>{{ formatDate(c.createdAt) }}</td>
              <td>
                <button
                  v-if="!c.used"
                  class="code-delete-btn"
                  title="删除"
                  @click="deleteCode(c)"
                >✕</button>
              </td>
            </tr>
            <tr v-if="codes.length === 0">
              <td colspan="5" class="dash-empty">暂无邀请码，点击上方按钮生成</td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>
  </div>

  <!-- Detail panel (fullscreen) -->
  <div v-if="selected" class="detail-overlay">
    <div class="detail-panel">

      <!-- Top bar -->
      <div class="detail-topbar">
        <div class="detail-topbar-left">
          <span class="detail-student">{{ selected.studentName }}</span>
          <span class="detail-topbar-sep">|</span>
          <span class="detail-topbar-meta">{{ submissionTypeLabel(selected) }}</span>
          <span class="detail-topbar-sep">|</span>
          <span class="detail-topbar-meta">Subject: {{ selected.subjectField || "—" }}</span>
          <span class="detail-topbar-sep">|</span>
          <span class="detail-topbar-meta">{{ isBuildSentence(selected) ? submissionMetric(selected) : `${selected.wordCount} 词` }}</span>
          <span class="detail-topbar-sep">|</span>
          <span class="detail-topbar-meta">用时 {{ formatTime(selected.timeUsedSeconds) }}</span>
          <span class="detail-topbar-sep">|</span>
          <span class="detail-topbar-meta">{{ formatDate(selected.submittedAt) }}</span>
        </div>
        <div class="detail-topbar-right">
          <button class="detail-download-btn" @click="downloadSubmission(selected)">Download .doc</button>
          <button class="detail-close-btn" @click="selected = null">✕ 关闭</button>
        </div>
      </div>

      <!-- Two-column body: question left, answer right -->
      <div class="detail-body">
        <div v-if="selected.question" class="detail-col detail-col-question">
          <div class="detail-col-title">{{ isBuildSentence(selected) ? "练习" : "题目" }}</div>
          <div class="detail-question-text" v-html="renderMarkdown(selected.question)"></div>
        </div>
        <div class="detail-col detail-col-answer" :class="{ 'detail-col-full': !selected.question }">
          <div class="detail-col-title">{{ isBuildSentence(selected) ? "逐题记录" : "学生作答" }}</div>
          <div class="detail-answer-text">{{ selected.answer }}</div>
        </div>
      </div>

    </div>
  </div>
</template>
