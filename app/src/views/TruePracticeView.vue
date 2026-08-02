<script setup>
import { computed, nextTick, onBeforeUnmount, ref } from "vue";
import { addDoc, collection, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { useRoute, useRouter } from "vue-router";
import { db } from "../firebase";
import { useAuth } from "../composables/useAuth";
import NavBar from "../components/NavBar.vue";
import questionBank from "../data/writingQuestions.json";

const route = useRoute();
const router = useRouter();
const { user, userProfile, guestMode } = useAuth();

const kind = ref(route.params.kind === "academic" ? "academic" : "email");
const screen = ref("picker");
const activeCategory = ref("全部");
const activeDiscussionType = ref("全部");
const selectedQuestion = ref(null);
const answer = ref("");
const editor = ref(null);
const secondsLeft = ref(0);
const showTimer = ref(true);
const showWordCount = ref(true);
const submitting = ref(false);
const grading = ref(false);
const gradingResult = ref("");
const gradingError = ref("");
const submissionId = ref("");
let timer = null;

const GRADER_API_URL = import.meta.env.VITE_COZE_GRADER_API_URL
  || "https://toefl-writing-grader.stephaniefeng9.workers.dev/";

const questions = computed(() => kind.value === "email" ? questionBank.email : questionBank.academic);
const categories = computed(() => ["全部", ...new Set(questions.value.map((item) => item.category))]);
const filteredQuestions = computed(() => questions.value.filter((item) => {
  if (activeCategory.value !== "全部" && item.category !== activeCategory.value) return false;
  if (kind.value === "academic" && activeDiscussionType.value !== "全部" && item.discussionType !== activeDiscussionType.value) return false;
  return true;
}));
const wordCount = computed(() => answer.value.trim() ? answer.value.trim().split(/\s+/).length : 0);
const formattedTimer = computed(() => `${String(Math.floor(secondsLeft.value / 60)).padStart(2, "0")}:${String(secondsLeft.value % 60).padStart(2, "0")}`);
const taskLabel = computed(() => kind.value === "email" ? "Email 真题练习" : "学术讨论真题练习");

const stopTimer = () => {
  if (timer) clearInterval(timer);
  timer = null;
};

const switchKind = (nextKind) => {
  kind.value = nextKind;
  activeCategory.value = "全部";
  activeDiscussionType.value = "全部";
  selectedQuestion.value = null;
  router.replace(`/true-practice/${nextKind}`);
};

const selectQuestion = (question) => {
  selectedQuestion.value = question;
};

const startQuestion = async () => {
  if (!selectedQuestion.value) return;
  answer.value = "";
  gradingResult.value = "";
  gradingError.value = "";
  submissionId.value = "";
  secondsLeft.value = selectedQuestion.value.minutes * 60;
  screen.value = "exam";
  await nextTick();
  editor.value?.focus();
  timer = setInterval(() => {
    secondsLeft.value -= 1;
    if (secondsLeft.value <= 0) {
      secondsLeft.value = 0;
      stopTimer();
      submitPractice(true);
    }
  }, 1000);
};

const questionText = (question) => {
  if (kind.value === "email") {
    return [question.context, question.instruction, ...question.bullets.map((item) => `- ${item}`)].join("\n");
  }
  return [
    `${question.professor.name}: ${question.professor.text}`,
    ...question.students.map((student) => `${student.name}: ${student.text}`),
  ].join("\n\n");
};

const gradingPayload = () => [
  `题型：${kind.value === "email" ? "邮件" : "学术讨论"}`,
  `题目：\n${questionText(selectedQuestion.value)}`,
  `学生作文：\n${answer.value}`,
  "是否需要老师模式：否",
].join("\n\n");

const extractScore = (text) => {
  const line = String(text || "").match(/(?:分数|预估分数|得分)\s*[:：]\s*([^\n]+)/i);
  const score = line?.[1]?.match(/\d+(?:\.\d+)?(?:\s*\/\s*\d+(?:\.\d+)?)?/);
  return score?.[0]?.replace(/\s+/g, "") || "";
};

const gradeSubmission = async () => {
  if (guestMode.value || !submissionId.value) return;
  grading.value = true;
  gradingError.value = "";
  try {
    const response = await fetch(GRADER_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: gradingPayload(), userId: user.value?.uid }),
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(data.error || "AI 批改暂时不可用。");
    gradingResult.value = data.result || "AI 暂未返回批改内容。";
    await updateDoc(doc(db, "submissions", submissionId.value), {
      aiScore: extractScore(gradingResult.value),
      aiFeedback: gradingResult.value,
      aiGradedAt: serverTimestamp(),
    });
  } catch (error) {
    gradingError.value = error.message || "AI 批改失败，请稍后重试。";
  } finally {
    grading.value = false;
  }
};

const submitPractice = async (automatic = false) => {
  if (submitting.value || screen.value !== "exam") return;
  if (!answer.value.trim() && !automatic) {
    window.alert("请先完成作答。");
    return;
  }
  if (!automatic && !window.confirm("确认提交本次练习吗？")) return;
  stopTimer();
  submitting.value = true;
  try {
    if (!guestMode.value && userProfile.value?.role !== "teacher") {
      const reference = await addDoc(collection(db, "submissions"), {
        type: kind.value === "email" ? "email" : "academic-discussion",
        source: "true-question-bank",
        questionId: selectedQuestion.value.id,
        questionCategory: selectedQuestion.value.category,
        question: questionText(selectedQuestion.value),
        studentId: user.value.uid,
        studentName: userProfile.value?.name || user.value.email,
        teacherId: userProfile.value?.teacherId || null,
        toField: kind.value === "email" ? selectedQuestion.value.to : "Academic Discussion",
        subjectField: kind.value === "email" ? selectedQuestion.value.subject : selectedQuestion.value.title,
        answer: answer.value,
        wordCount: wordCount.value,
        timeUsedSeconds: selectedQuestion.value.minutes * 60 - secondsLeft.value,
        submittedAt: serverTimestamp(),
      });
      submissionId.value = reference.id;
    }
    screen.value = "result";
    if (!guestMode.value && submissionId.value) await gradeSubmission();
  } catch (error) {
    window.alert(`提交失败：${error.message}`);
    if (secondsLeft.value > 0) startTimerAgain();
  } finally {
    submitting.value = false;
  }
};

const startTimerAgain = () => {
  if (timer || secondsLeft.value <= 0) return;
  timer = setInterval(() => {
    secondsLeft.value -= 1;
    if (secondsLeft.value <= 0) {
      secondsLeft.value = 0;
      stopTimer();
      submitPractice(true);
    }
  }, 1000);
};

const editorCommand = async (command) => {
  editor.value?.focus();
  if (command === "paste") {
    try {
      const text = await navigator.clipboard.readText();
      const start = editor.value.selectionStart;
      const end = editor.value.selectionEnd;
      answer.value = answer.value.slice(0, start) + text + answer.value.slice(end);
    } catch {
      window.alert("浏览器没有允许读取剪贴板，请直接按 Command+V 粘贴。");
    }
    return;
  }
  document.execCommand(command);
};

const backToPicker = () => {
  stopTimer();
  screen.value = "picker";
  selectedQuestion.value = null;
};

onBeforeUnmount(stopTimer);
</script>

<template>
  <NavBar />

  <main v-if="screen === 'picker'" class="true-picker-page">
    <header class="true-picker-header">
      <button class="back-btn" @click="router.push('/practice')">← 返回练习中心</button>
      <div>
        <h1>托福写作真题练习</h1>
        <p>先按标签选择题目。进入确认页后点击开始，倒计时才会启动。</p>
      </div>
    </header>

    <div class="true-kind-tabs">
      <button :class="{ active: kind === 'email' }" @click="switchKind('email')">Email</button>
      <button :class="{ active: kind === 'academic' }" @click="switchKind('academic')">学术讨论</button>
    </div>

    <section class="true-filter-band">
      <div class="true-filter-label">情景分类</div>
      <div class="true-filter-options">
        <button v-for="category in categories" :key="category" :class="{ active: activeCategory === category }" @click="activeCategory = category">{{ category }}</button>
      </div>
      <template v-if="kind === 'academic'">
        <div class="true-filter-label">讨论类型</div>
        <div class="true-filter-options">
          <button v-for="type in ['全部', '开放式', '封闭式']" :key="type" :class="{ active: activeDiscussionType === type }" @click="activeDiscussionType = type">{{ type }}</button>
        </div>
      </template>
    </section>

    <div class="true-question-summary">{{ filteredQuestions.length }} 道可练真题</div>
    <section class="true-question-list">
      <button v-for="question in filteredQuestions" :key="question.id" class="true-question-row" @click="selectQuestion(question)">
        <span class="true-question-code">{{ question.code }}</span>
        <span class="true-question-name">{{ question.title }}</span>
        <span class="true-question-meta">{{ question.category }}<template v-if="kind === 'academic'"> · {{ question.discussionType }}</template></span>
        <span class="true-question-time">{{ question.minutes }} 分钟</span>
      </button>
    </section>

    <div v-if="selectedQuestion" class="true-preview-overlay" @click.self="selectedQuestion = null">
      <section class="true-preview-dialog">
        <button class="true-preview-close" title="关闭" @click="selectedQuestion = null">×</button>
        <div class="true-preview-kicker">{{ taskLabel }} · {{ selectedQuestion.category }}</div>
        <h2>{{ selectedQuestion.title }}</h2>
        <p>本题限时 {{ selectedQuestion.minutes }} 分钟。点击开始后进入模考界面并启动倒计时。</p>
        <button class="true-start-btn" @click="startQuestion">开始练习</button>
      </section>
    </div>
  </main>

  <main v-else class="toefl-sim-shell">
    <header class="toefl-sim-topbar">
      <div><strong>Writing</strong><span>|</span><span>Question {{ kind === 'email' ? '1' : '2' }} of 2</span></div>
      <div class="toefl-sim-actions">
        <strong v-if="showTimer">{{ formattedTimer }}</strong>
        <button @click="showTimer = !showTimer">{{ showTimer ? 'Hide Timer' : 'Show Timer' }}</button>
        <button v-if="screen === 'exam'" class="toefl-submit-top" :disabled="submitting" @click="submitPractice(false)">{{ submitting ? '提交中' : '提交' }}</button>
      </div>
    </header>

    <section v-if="kind === 'email'" class="toefl-email-grid">
      <article class="toefl-prompt-pane">
        <p>{{ selectedQuestion.context }}</p>
        <strong>{{ selectedQuestion.instruction }}</strong>
        <ul><li v-for="bullet in selectedQuestion.bullets" :key="bullet">{{ bullet }}</li></ul>
        <p>Write as much as you can and in complete sentences.</p>
      </article>
      <section class="toefl-response-pane">
        <h2>Your Response:</h2>
        <div class="toefl-email-meta"><strong>To: {{ selectedQuestion.to }}</strong><strong>Subject: {{ selectedQuestion.subject }}</strong></div>
        <div class="toefl-editor-frame">
          <div class="toefl-editor-toolbar">
            <div><button @click="editorCommand('cut')">Cut</button><button @click="editorCommand('paste')">Paste</button><button @click="editorCommand('undo')">Undo</button><button @click="editorCommand('redo')">Redo</button></div>
            <button @click="showWordCount = !showWordCount">{{ showWordCount ? 'Hide Word Count' : 'Show Word Count' }} <strong v-if="showWordCount">{{ wordCount }}</strong></button>
          </div>
          <textarea ref="editor" v-model="answer" :readonly="screen !== 'exam'" aria-label="Email response"></textarea>
        </div>
      </section>
    </section>

    <section v-else class="toefl-academic-grid">
      <article class="toefl-academic-professor">
        <p>Your professor is teaching a class. Write a post responding to the professor's question.</p>
        <strong>In your response, you should do the following.</strong>
        <ul><li>Express and support your opinion.</li><li>Make a contribution to the discussion in your own words.</li></ul>
        <p>An effective response will contain at least 100 words.</p>
        <div class="toefl-person professor"><span class="toefl-avatar">{{ selectedQuestion.professor.name.replace(/^(Dr\.|Doctor)\s*/, '').slice(0, 1) }}</span><strong>{{ selectedQuestion.professor.name }}</strong></div>
        <p class="toefl-professor-text">{{ selectedQuestion.professor.text }}</p>
      </article>
      <section class="toefl-academic-response">
        <div class="toefl-student-post" v-for="student in selectedQuestion.students" :key="student.name">
          <div class="toefl-person"><span class="toefl-avatar student">{{ student.name.slice(0, 1) }}</span><strong>{{ student.name }}</strong></div>
          <p>{{ student.text }}</p>
        </div>
        <div class="toefl-editor-frame academic">
          <div class="toefl-editor-toolbar">
            <div><button @click="editorCommand('cut')">Cut</button><button @click="editorCommand('paste')">Paste</button><button @click="editorCommand('undo')">Undo</button><button @click="editorCommand('redo')">Redo</button></div>
            <button @click="showWordCount = !showWordCount">{{ showWordCount ? 'Hide Word Count' : 'Show Word Count' }} <strong v-if="showWordCount">{{ wordCount }}</strong></button>
          </div>
          <textarea ref="editor" v-model="answer" :readonly="screen !== 'exam'" aria-label="Academic discussion response"></textarea>
        </div>
      </section>
    </section>

    <div v-if="screen === 'result'" class="true-result-overlay">
      <section class="true-result-dialog">
        <div class="true-result-kicker">本次练习已提交</div>
        <h2>{{ selectedQuestion.title }}</h2>
        <p>{{ wordCount }} 词 · 用时 {{ Math.floor((selectedQuestion.minutes * 60 - secondsLeft) / 60) }} 分 {{ (selectedQuestion.minutes * 60 - secondsLeft) % 60 }} 秒</p>
        <div v-if="grading" class="true-grading-state">AI 正在批改...</div>
        <div v-else-if="gradingError" class="true-grading-error">{{ gradingError }}</div>
        <pre v-else-if="gradingResult" class="true-grading-result">{{ gradingResult }}</pre>
        <p v-else-if="guestMode">访客练习不会保存记录或调用 AI 批改。</p>
        <div class="true-result-actions"><button @click="backToPicker">返回题库</button><button v-if="gradingError && submissionId" @click="gradeSubmission">重新批改</button></div>
      </section>
    </div>
  </main>
</template>
