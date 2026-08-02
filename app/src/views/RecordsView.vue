<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../composables/useAuth";
import NavBar from "../components/NavBar.vue";

const { user, guestMode } = useAuth();

const submissions = ref([]);
const loading = ref(true);
const error = ref("");
const selected = ref(null);
const activeFilter = ref("all");
let unsubscribe = null;

const subscribeRecords = () => {
  if (unsubscribe) unsubscribe();
  if (!user.value?.uid || guestMode.value) {
    loading.value = false;
    submissions.value = [];
    return;
  }

  loading.value = true;
  error.value = "";
  const q = query(collection(db, "submissions"), where("studentId", "==", user.value.uid));
  unsubscribe = onSnapshot(q, (snap) => {
    const docs = snap.docs.map((docSnap) => ({ id: docSnap.id, ...docSnap.data() }));
    docs.sort((a, b) => (b.submittedAt?.seconds ?? 0) - (a.submittedAt?.seconds ?? 0));
    submissions.value = docs;
    loading.value = false;
  }, (err) => {
    console.error("student records listener:", err);
    error.value = "暂时无法读取练习记录，请稍后刷新页面重试。";
    loading.value = false;
  });
};

onMounted(subscribeRecords);
onBeforeUnmount(() => {
  if (unsubscribe) unsubscribe();
});

const isBuildSentence = (submission) => submission.type === "build-sentence";
const isAcademic = (submission) => submission.type === "academic-discussion";
const isEmail = (submission) => !isBuildSentence(submission) && !isAcademic(submission);

const typeLabel = (submission) => {
  if (isBuildSentence(submission)) return submission.source === "mistake-book" ? "Build 错题本" : "Build Sentence";
  if (isAcademic(submission)) return "学术讨论";
  return "邮件";
};

const scoreLabel = (submission) => {
  if (isBuildSentence(submission)) return `${submission.accuracy ?? "—"}%`;
  return submission.aiScore || "未 AI 评分";
};

const titleLabel = (submission) => {
  if (isBuildSentence(submission)) return submission.question || submission.subjectField || "Build a Sentence";
  return submission.subjectField || submission.toField || submission.question?.split("\n")?.[0] || "写作练习";
};

const filteredRecords = computed(() => {
  if (activeFilter.value === "build") return submissions.value.filter(isBuildSentence);
  if (activeFilter.value === "email") return submissions.value.filter(isEmail);
  if (activeFilter.value === "academic") return submissions.value.filter(isAcademic);
  return submissions.value;
});

const buildRecords = computed(() => submissions.value.filter(isBuildSentence));
const writingRecords = computed(() => submissions.value.filter((submission) => !isBuildSentence(submission)));
const aiScoredRecords = computed(() => writingRecords.value.filter((submission) => submission.aiScore));
const averageBuildAccuracy = computed(() => {
  const scored = buildRecords.value.filter((submission) => typeof submission.accuracy === "number");
  if (!scored.length) return "—";
  const total = scored.reduce((sum, submission) => sum + submission.accuracy, 0);
  return `${Math.round(total / scored.length)}%`;
});

const formatDate = (ts) => {
  if (!ts?.toDate) return "—";
  return ts.toDate().toLocaleString("zh-CN", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const formatTime = (seconds) => {
  if (!seconds && seconds !== 0) return "—";
  const s = Math.abs(Math.round(seconds));
  return `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
};

const renderQuestion = (text) => String(text || "").trim() || "—";
const buildAnswerRows = (submission) => (
  Array.isArray(submission?.buildSentenceAnswers) ? submission.buildSentenceAnswers : []
);
</script>

<template>
  <NavBar />

  <main class="records-wrapper">
    <section class="records-header">
      <div>
        <h1 class="records-title">我的练习记录</h1>
        <p class="records-lead">每一次提交都会单独保存。同一道题做多遍，也会按次数分别记录。</p>
      </div>
      <RouterLink to="/practice" class="records-practice-link">继续练习</RouterLink>
    </section>

    <section class="records-stats">
      <div class="record-stat-card">
        <div class="record-stat-num">{{ submissions.length }}</div>
        <div class="record-stat-label">总练习次数</div>
      </div>
      <div class="record-stat-card">
        <div class="record-stat-num">{{ buildRecords.length }}</div>
        <div class="record-stat-label">Build 次数</div>
      </div>
      <div class="record-stat-card">
        <div class="record-stat-num">{{ averageBuildAccuracy }}</div>
        <div class="record-stat-label">Build 平均正确率</div>
      </div>
      <div class="record-stat-card">
        <div class="record-stat-num">{{ aiScoredRecords.length }}</div>
        <div class="record-stat-label">AI 已评分写作</div>
      </div>
    </section>

    <section class="records-panel">
      <div class="records-filters">
        <button class="record-filter-btn" :class="{ active: activeFilter === 'all' }" @click="activeFilter = 'all'">全部</button>
        <button class="record-filter-btn" :class="{ active: activeFilter === 'build' }" @click="activeFilter = 'build'">Build Sentence</button>
        <button class="record-filter-btn" :class="{ active: activeFilter === 'email' }" @click="activeFilter = 'email'">邮件</button>
        <button class="record-filter-btn" :class="{ active: activeFilter === 'academic' }" @click="activeFilter = 'academic'">学术讨论</button>
      </div>

      <div v-if="loading" class="records-empty">正在读取记录...</div>
      <div v-else-if="error" class="records-empty">{{ error }}</div>
      <div v-else-if="filteredRecords.length === 0" class="records-empty">暂无练习记录。</div>

      <div v-else class="records-list">
        <button
          v-for="record in filteredRecords"
          :key="record.id"
          class="record-row"
          @click="selected = record"
        >
          <span class="record-type-badge" :class="{ build: isBuildSentence(record), academic: isAcademic(record) }">{{ typeLabel(record) }}</span>
          <span class="record-main">
            <strong>{{ titleLabel(record) }}</strong>
            <small>{{ formatDate(record.submittedAt) }} · 用时 {{ formatTime(record.timeUsedSeconds) }}</small>
          </span>
          <span class="record-score" :class="{ pending: !isBuildSentence(record) && !record.aiScore }">{{ scoreLabel(record) }}</span>
        </button>
      </div>
    </section>
  </main>

  <div v-if="selected" class="detail-overlay">
    <div class="detail-panel">
      <div class="detail-topbar">
        <div class="detail-topbar-left">
          <span class="detail-student">{{ typeLabel(selected) }}</span>
          <span class="detail-topbar-sep">|</span>
          <span class="detail-topbar-meta">{{ titleLabel(selected) }}</span>
          <span class="detail-topbar-sep">|</span>
          <span class="detail-topbar-meta">得分 {{ scoreLabel(selected) }}</span>
          <span class="detail-topbar-sep">|</span>
          <span class="detail-topbar-meta">{{ formatDate(selected.submittedAt) }}</span>
        </div>
        <button class="detail-close-btn" @click="selected = null">关闭</button>
      </div>

      <div class="detail-body records-detail-body">
        <div class="detail-col detail-col-question">
          <div class="detail-col-title">题目</div>
          <div class="detail-answer-text">{{ renderQuestion(selected.question) }}</div>
        </div>
        <div class="detail-col detail-col-answer">
          <div class="detail-col-title">{{ isBuildSentence(selected) ? "逐题记录" : "我的作答" }}</div>
          <div v-if="isBuildSentence(selected) && buildAnswerRows(selected).length" class="record-answer-list">
            <div v-for="item in buildAnswerRows(selected)" :key="`${item.number}-${item.question}`" class="record-answer-item">
              <strong>{{ item.number }}. {{ item.question }}</strong>
              <span>我的答案：{{ item.userAnswer || "—" }}</span>
              <span :class="item.isCorrect ? 'record-correct' : 'record-wrong'">{{ item.isCorrect ? "正确" : "错误" }}</span>
            </div>
          </div>
          <div v-else class="detail-answer-text">{{ selected.answer || "—" }}</div>
        </div>
        <div v-if="!isBuildSentence(selected)" class="detail-col detail-col-answer">
          <div class="detail-col-title">AI 评分与反馈</div>
          <div class="detail-answer-text">{{ selected.aiFeedback || "这次练习还没有 AI 评分。提交后点击 AI 批改，评分会保存到这里。" }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
