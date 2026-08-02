<script setup>
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from "vue";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../composables/useAuth";
import NavBar from "../components/NavBar.vue";

const { user, userProfile, guestMode } = useAuth();

// ── Screen state ──
const currentScreen = ref("start"); // 'start' | 'ai-setup' | 'exam' | 'sentence-builder'
// examState: 'idle' (before Start), 'running' (in progress), 'submitted'
const examState = ref("idle");
const startTime = ref(null);

// ── Timer ──
const timerMinutes = ref(10); // user-adjustable duration
const timerSeconds = ref(0);  // countdown seconds remaining
const timeIsUp = ref(false);
let timerInterval = null;

const formattedTimer = computed(() => {
  const m = Math.floor(timerSeconds.value / 60);
  const s = timerSeconds.value % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
});

const timerWarning = computed(() => timerSeconds.value <= 60 && timerSeconds.value > 0 && examState.value === "running");

const stopTimer = () => {
  if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }
};

// ── Content ──
const questionText = ref("");
const answerText = ref("");
const imagePreview = ref("");
const answerTextarea = ref(null);
const toField = ref("");
const subjectField = ref("");
const showWordCount = ref(true);
const showTimer = ref(true);

// ── Modals ──
const showAiWarning = ref(false);
const showCozeGrader = ref(false);
const showLoginRequired = ref(false);
const showDownloadConfirm = ref(false);
const showSubmitConfirm = ref(false);
const submitLoading = ref(false);
const loginRequiredMessage = ref("");

// ── AI-setup state ──
const aiResponseText = ref("");
const promptCopied = ref(false);
const aiGeneratedFields = ref(false);

const AI_PROMPT = `Please generate a TOEFL Writing email task. Format your response EXACTLY as shown below — do not include any text outside the tags:

[TO]
(Recipient first name only, e.g. "Alex")
[/TO]

[SUBJECT]
(Email subject line, e.g. "Group Project Participation")
[/SUBJECT]

[QUESTION]
(2–3 sentences of background/scenario context.)

**Write an email to [name]. In your email, do the following.**
* (First instruction)
* (Second instruction)
* (Third instruction)

Write as much as you can and in complete sentences.
[/QUESTION]

Rules:
- Use **bold** markdown for the "Write an email…" instruction line.
- Use * (asterisk + space) for each bullet point.
- Do not use any other markdown.`;

const COZE_GRADER_URL = "https://code.coze.cn/web-sdk/7658702600073855030";
const BUILD_SENTENCE_BASE_URL = `${import.meta.env.BASE_URL}build-sentence/`;
const BUILD_SENTENCE_QUIZZES = [
  ...Array.from({ length: 23 }, (_, index) => {
    const number = index + 1;
    return {
      label: `3月真题${number}`,
      file: `march/quiz-${String(number).padStart(2, "0")}.html`,
    };
  }),
  ...Array.from({ length: 11 }, (_, index) => {
    const number = index + 1;
    return {
      label: `4月真题${number}`,
      file: `april/quiz-${String(number).padStart(2, "0")}.html`,
    };
  }),
];
const selectedBuildSentenceQuiz = ref("");
const buildSentenceIframe = ref(null);
const buildSentenceSubmitLoading = ref(false);
const buildSentenceSubmitNotice = ref("");
const selectedBuildSentenceUrl = computed(() => (
  selectedBuildSentenceQuiz.value ? `${BUILD_SENTENCE_BASE_URL}${selectedBuildSentenceQuiz.value}` : ""
));
const selectedBuildSentenceLabel = computed(() => (
  BUILD_SENTENCE_QUIZZES.find((quiz) => quiz.file === selectedBuildSentenceQuiz.value)?.label || "请选择一套真题"
));

// ── Build a sentence practice ──
const SENTENCE_EXERCISES = [
  {
    chinese: "我写信是想询问是否可以延长项目截止日期。",
    cues: ["I am writing to ask", "whether", "extend the deadline"],
    sample: "I am writing to ask whether I could extend the deadline for my project.",
  },
  {
    chinese: "这个活动能让学生更了解不同文化。",
    cues: ["help students", "learn more about", "different cultures"],
    sample: "This activity can help students learn more about different cultures.",
  },
  {
    chinese: "如果我们提前计划，就能避免很多问题。",
    cues: ["If we plan ahead", "avoid", "problems"],
    sample: "If we plan ahead, we can avoid many problems.",
  },
  {
    chinese: "我认为这个建议更实际，因为它不需要太多钱。",
    cues: ["I think", "more practical", "does not require much money"],
    sample: "I think this suggestion is more practical because it does not require much money.",
  },
  {
    chinese: "参加志愿活动可以培养学生的责任感。",
    cues: ["taking part in", "volunteer activities", "sense of responsibility"],
    sample: "Taking part in volunteer activities can develop students' sense of responsibility.",
  },
  {
    chinese: "线上课程的一个优点是学生可以更灵活地安排时间。",
    cues: ["one advantage of", "online classes", "arrange their time flexibly"],
    sample: "One advantage of online classes is that students can arrange their time more flexibly.",
  },
  {
    chinese: "这家博物馆很适合学生，因为门票便宜而且交通方便。",
    cues: ["suitable for students", "affordable tickets", "convenient transportation"],
    sample: "This museum is suitable for students because it has affordable tickets and convenient transportation.",
  },
  {
    chinese: "我建议学校邀请专业人士来分享他们的经验。",
    cues: ["suggest that", "invite professionals", "share their experience"],
    sample: "I suggest that the school invite professionals to share their experience.",
  },
];
const sentenceTimerMinutes = ref(8);
const sentenceSeconds = ref(0);
const sentenceState = ref("idle"); // 'idle' | 'running' | 'finished'
const sentenceIndex = ref(0);
const sentenceAnswers = ref([]);
const currentSentenceAnswer = ref("");
let sentenceTimerInterval = null;

const sentenceFormattedTimer = computed(() => {
  const m = Math.floor(sentenceSeconds.value / 60);
  const s = sentenceSeconds.value % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
});
const sentenceTimerWarning = computed(() => sentenceSeconds.value <= 60 && sentenceSeconds.value > 0 && sentenceState.value === "running");
const currentSentence = computed(() => SENTENCE_EXERCISES[sentenceIndex.value]);
const sentenceProgress = computed(() => `${sentenceIndex.value + 1} / ${SENTENCE_EXERCISES.length}`);

const stopSentenceTimer = () => {
  if (sentenceTimerInterval) { clearInterval(sentenceTimerInterval); sentenceTimerInterval = null; }
};

onUnmounted(() => {
  stopTimer();
  stopSentenceTimer();
});

// ── Computed ──
const wordCount = computed(() => {
  const text = answerText.value.trim();
  return text ? text.split(/\s+/).length : 0;
});

// ── Helpers ──
const extractTag = (text, tag) => {
  const m = text.match(new RegExp(`\\[${tag}\\]([\\s\\S]*?)\\[\\/${tag}\\]`, "i"));
  return m ? m[1].trim() : "";
};

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

const escapeHtml = (text) =>
  text
    .replace(/&/g, "&amp;").replace(/</g, "&lt;")
    .replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");

const buildGradingPayload = () => {
  const parts = ["题型：邮件"];
  parts.push(`题目：\n${questionText.value.trim() || "缺少题目"}`);
  if (toField.value.trim()) parts.push(`To：${toField.value.trim()}`);
  if (subjectField.value.trim()) parts.push(`Subject：${subjectField.value.trim()}`);
  parts.push(`学生作文：\n${answerText.value.trim() || "缺少学生作文"}`);
  parts.push("是否需要老师模式：否");
  return parts.join("\n\n");
};

const saveCurrentSentenceAnswer = () => {
  sentenceAnswers.value[sentenceIndex.value] = currentSentenceAnswer.value;
};

const startSentencePractice = () => {
  stopTimer();
  stopSentenceTimer();
  sentenceAnswers.value = Array(SENTENCE_EXERCISES.length).fill("");
  currentSentenceAnswer.value = "";
  sentenceIndex.value = 0;
  sentenceSeconds.value = sentenceTimerMinutes.value * 60;
  sentenceState.value = "running";
  sentenceTimerInterval = setInterval(() => {
    if (sentenceSeconds.value > 0) {
      sentenceSeconds.value--;
    } else {
      saveCurrentSentenceAnswer();
      stopSentenceTimer();
      sentenceState.value = "finished";
    }
  }, 1000);
};

const goToNextSentence = () => {
  saveCurrentSentenceAnswer();
  if (sentenceIndex.value >= SENTENCE_EXERCISES.length - 1) {
    stopSentenceTimer();
    sentenceState.value = "finished";
    return;
  }
  sentenceIndex.value++;
  currentSentenceAnswer.value = sentenceAnswers.value[sentenceIndex.value] || "";
};

const goToPreviousSentence = () => {
  saveCurrentSentenceAnswer();
  if (sentenceIndex.value === 0) return;
  sentenceIndex.value--;
  currentSentenceAnswer.value = sentenceAnswers.value[sentenceIndex.value] || "";
};

const finishSentencePractice = () => {
  saveCurrentSentenceAnswer();
  stopSentenceTimer();
  sentenceState.value = "finished";
};

const resetSentencePractice = () => {
  stopSentenceTimer();
  sentenceState.value = "idle";
  sentenceSeconds.value = 0;
  sentenceIndex.value = 0;
  sentenceAnswers.value = [];
  currentSentenceAnswer.value = "";
};

const copySentenceResults = async () => {
  const rows = SENTENCE_EXERCISES.map((item, index) => [
    `${index + 1}. ${item.chinese}`,
    `我的句子：${sentenceAnswers.value[index] || "未作答"}`,
    `参考句：${item.sample}`,
  ].join("\n"));
  try {
    await navigator.clipboard.writeText(`Build a Sentence 限时练习\n\n${rows.join("\n\n")}`);
    window.alert("✅ 练习结果已复制。");
  } catch {
    window.alert("复制失败，请手动复制结果。");
  }
};

const cleanSentenceForCompare = (text = "") =>
  text.toLowerCase().replace(/[^a-z0-9]/g, "");

const parseBuildSentenceTimer = (doc) => {
  const timerText = doc.querySelector("#timer")?.textContent?.trim() || "";
  const scriptText = Array.from(doc.scripts).map((script) => script.textContent || "").join("\n");
  const limit = Number(scriptText.match(/const\s+TIME_LIMIT\s*=\s*(\d+)/)?.[1] || 410);
  const match = timerText.match(/^(\+)?(\d{1,2}):(\d{2})$/);
  if (!match) return null;
  const shownSeconds = Number(match[2]) * 60 + Number(match[3]);
  return match[1] ? limit + shownSeconds : Math.max(0, limit - shownSeconds);
};

const syncBuildSentenceStudentName = () => {
  const doc = buildSentenceIframe.value?.contentDocument;
  const input = doc?.querySelector("#username");
  if (input) input.value = userProfile.value?.name || user.value?.email || "";
};

const collectBuildSentenceAttempt = () => {
  const doc = buildSentenceIframe.value?.contentDocument;
  if (!doc) throw new Error("练习页面还没有加载完成。");
  const questionBlocks = Array.from(doc.querySelectorAll(".question-block"));
  if (questionBlocks.length === 0) throw new Error("没有读取到练习题，请稍后再试。");

  let correctCount = 0;
  let emptyCount = 0;
  const answers = questionBlocks.map((block, index) => {
    const answerArea = block.querySelector(".row-answer-area");
    const correctAnswer = answerArea?.getAttribute("data-correct") || "";
    const blankPieces = Array.from(answerArea?.children || []).map((child) => {
      if (child.classList.contains("drop-box")) return "_____";
      return child.textContent.trim();
    }).filter(Boolean);
    const pieces = Array.from(answerArea?.children || []).map((child) => {
      if (child.classList.contains("drop-box")) {
        const text = child.textContent.trim();
        if (!text) emptyCount++;
        return text || "___";
      }
      return child.textContent.trim();
    }).filter(Boolean);
    const userAnswer = pieces.join(" ");
    const isCorrect = cleanSentenceForCompare(userAnswer) === cleanSentenceForCompare(correctAnswer);
    if (isCorrect) correctCount++;
    const wordBank = Array.from(block.querySelectorAll(".draggable"))
      .map((item) => item.textContent.trim())
      .filter(Boolean);
    return {
      number: index + 1,
      question: block.querySelector(".row-question")?.textContent?.trim() || `Question ${index + 1}`,
      blankSentence: blankPieces.join(" "),
      wordBank,
      userAnswer,
      correctAnswer,
      isCorrect,
    };
  });

  return {
    answers,
    correctCount,
    totalQuestions: answers.length,
    emptyCount,
    accuracy: Math.round((correctCount / answers.length) * 100),
    timeUsedSeconds: parseBuildSentenceTimer(doc),
  };
};

const formatBuildSentenceAnswer = (attempt) => [
  `${selectedBuildSentenceLabel.value}`,
  `Score: ${attempt.correctCount}/${attempt.totalQuestions} (${attempt.accuracy}%)`,
  "",
  ...attempt.answers.map((item) => [
    `${item.number}. ${item.question}`,
    `Student: ${item.userAnswer}`,
    `Correct: ${item.correctAnswer}`,
    `Result: ${item.isCorrect ? "Correct" : "Incorrect"}`,
  ].join("\n")),
].join("\n\n");

const submitBuildSentenceAttempt = async () => {
  if (guestMode.value) {
    requireLoginForFeature("Build a Sentence 提交记录");
    return;
  }
  let attempt;
  try {
    attempt = collectBuildSentenceAttempt();
  } catch (err) {
    window.alert(err.message);
    return;
  }
  if (attempt.emptyCount > 0) {
    window.alert("还有空格没有完成，请填完后再提交给老师。");
    return;
  }
  buildSentenceSubmitLoading.value = true;
  buildSentenceSubmitNotice.value = "";
  try {
    await addDoc(collection(db, "submissions"), {
      type: "build-sentence",
      studentId: user.value.uid,
      studentName: userProfile.value?.name || user.value.email,
      teacherId: userProfile.value?.teacherId || null,
      question: selectedBuildSentenceLabel.value,
      quizFile: selectedBuildSentenceQuiz.value,
      toField: "Build a Sentence",
      subjectField: `Build a Sentence - ${selectedBuildSentenceLabel.value}`,
      answer: formatBuildSentenceAnswer(attempt),
      buildSentenceAnswers: attempt.answers,
      correctCount: attempt.correctCount,
      totalQuestions: attempt.totalQuestions,
      accuracy: attempt.accuracy,
      wordCount: null,
      timeUsedSeconds: attempt.timeUsedSeconds,
      submittedAt: serverTimestamp(),
    });
    buildSentenceSubmitNotice.value = "已提交给老师";
    window.alert("✅ Build a Sentence 记录已提交给老师。");
  } catch (err) {
    window.alert(`提交失败：${err.message}`);
  } finally {
    buildSentenceSubmitLoading.value = false;
  }
};

// ── Start practice ──
const startPractice = () => {
  startTime.value = Date.now();
  timerSeconds.value = timerMinutes.value * 60;
  timeIsUp.value = false;
  examState.value = "running";
  timerInterval = setInterval(() => {
    if (timerSeconds.value > 0) {
      timerSeconds.value--;
    } else {
      stopTimer();
      timeIsUp.value = true;
      autoSubmit();
    }
  }, 1000);
  if (document.documentElement.requestFullscreen)
    document.documentElement.requestFullscreen().catch(() => {});
};

// ── Image ──
const readImageFile = (file) => {
  const reader = new FileReader();
  reader.onload = (e) => { imagePreview.value = e.target?.result || ""; };
  reader.readAsDataURL(file);
};
const handleImageUpload = (event) => {
  const file = event.target.files?.[0];
  if (file) readImageFile(file);
  event.target.value = "";
};
const handleQuestionPaste = (event) => {
  for (const item of event.clipboardData?.items || []) {
    if (item.type?.startsWith("image/")) {
      event.preventDefault();
      const file = item.getAsFile();
      if (file) readImageFile(file);
      break;
    }
  }
};

// ── Answer textarea ──
const autoResizeAnswer = () => {
  const el = answerTextarea.value;
  if (!el) return;
  el.style.height = "auto";
  el.style.height = `${Math.max(el.scrollHeight, 300)}px`;
};
const cutText = () => { answerTextarea.value?.focus(); document.execCommand("cut"); };
const pasteText = async () => {
  const el = answerTextarea.value;
  if (!el) return;
  try {
    const text = await navigator.clipboard.readText();
    const start = el.selectionStart;
    const end = el.selectionEnd;
    answerText.value = answerText.value.substring(0, start) + text + answerText.value.substring(end);
    await nextTick();
    el.selectionStart = el.selectionEnd = start + text.length;
    el.focus();
  } catch { el.focus(); document.execCommand("paste"); }
};
const undoText = () => { answerTextarea.value?.focus(); document.execCommand("undo"); };
const redoText = () => { answerTextarea.value?.focus(); document.execCommand("redo"); };

// ── Download ──
const buildDownloadFilename = () => {
  const now = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  const ts = `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}_${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}`;
  const subject = subjectField.value.trim().replace(/[\\/:*?"<>|]/g, "_");
  return subject ? `TOEFL_Practice_${subject}_${ts}.doc` : `TOEFL_Practice_${ts}.doc`;
};
const confirmDownload = () => {
  showDownloadConfirm.value = false;
  const topic = questionText.value || "未填写题目";
  const html = `<html><meta charset="utf-8"><body>
    <h2 style="color:#4a90e2;">TOEFL Practice Report</h2>
    <p><b>Topic:</b> ${escapeHtml(topic)}</p>
    ${imagePreview.value ? `<img src="${imagePreview.value}" width="400"><br>` : ""}
    <hr><h3>Content:</h3><p>${escapeHtml(answerText.value).replace(/\n/g, "<br>")}</p>
  </body></html>`;
  const blob = new Blob(["\ufeff", html], { type: "application/msword" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = buildDownloadFilename();
  link.click();
  window.setTimeout(() => URL.revokeObjectURL(link.href), 1000);
};

// ── AI grading ──
const requireLoginForFeature = (featureName) => {
  loginRequiredMessage.value = `${featureName}仅限登录用户使用，请先登录或注册。`;
  showLoginRequired.value = true;
};

const openAiWarning = () => {
  if (guestMode.value) {
    requireLoginForFeature("AI 批改功能");
    return;
  }
  showAiWarning.value = true;
};

const confirmAiGrading = async () => {
  if (guestMode.value) {
    showAiWarning.value = false;
    requireLoginForFeature("AI 批改功能");
    return;
  }
  showAiWarning.value = false;
  showCozeGrader.value = true;
  const gradingPayload = buildGradingPayload();
  try {
    await navigator.clipboard.writeText(gradingPayload);
    window.setTimeout(() => {
      window.alert("✅ 题目和作文已复制。\n\n请在右侧 Coze 批改窗口中粘贴发送。");
    }, 100);
  } catch { window.alert("复制失败，请手动复制后继续。"); }
};

const copyGradingPayload = async () => {
  try {
    await navigator.clipboard.writeText(buildGradingPayload());
    window.alert("✅ 已重新复制。");
  } catch {
    window.alert("复制失败，请手动复制左侧内容。");
  }
};

const goToLogin = () => {
  showLoginRequired.value = false;
  window.location.hash = "#/login";
};

// ── Submit ──
const autoSubmit = async () => {
  if (!answerText.value.trim()) return;
  if (guestMode.value) {
    examState.value = "submitted";
    return;
  }
  submitLoading.value = true;
  try {
    await addDoc(collection(db, "submissions"), {
      studentId: user.value.uid,
      studentName: userProfile.value?.name || user.value.email,
      teacherId: userProfile.value?.teacherId || null,
      question: questionText.value,
      toField: toField.value,
      subjectField: subjectField.value,
      answer: answerText.value,
      wordCount: wordCount.value,
      timeUsedSeconds: timerMinutes.value * 60,
      aiGenerated: aiGeneratedFields.value,
      submittedAt: serverTimestamp(),
    });
    examState.value = "submitted";
  } catch {
    window.alert("自动提交失败，请手动提交。");
  } finally {
    submitLoading.value = false;
  }
};

const triggerSubmit = () => {
  if (!answerText.value.trim()) { window.alert("内容为空！"); return; }
  showSubmitConfirm.value = true;
};

const finishGuestPractice = () => {
  if (!answerText.value.trim()) { window.alert("内容为空！"); return; }
  stopTimer();
  examState.value = "submitted";
};

const confirmSubmit = async () => {
  showSubmitConfirm.value = false;
  submitLoading.value = true;
  try {
    stopTimer();
    await addDoc(collection(db, "submissions"), {
      studentId: user.value.uid,
      studentName: userProfile.value?.name || user.value.email,
      teacherId: userProfile.value?.teacherId || null,
      question: questionText.value,
      toField: toField.value,
      subjectField: subjectField.value,
      answer: answerText.value,
      wordCount: wordCount.value,
      timeUsedSeconds: timerMinutes.value * 60 - timerSeconds.value,
      aiGenerated: aiGeneratedFields.value,
      submittedAt: serverTimestamp(),
    });
    examState.value = "submitted";
  } catch {
    window.alert("提交失败，请重试。");
  } finally {
    submitLoading.value = false;
  }
};

// ── New practice ──
const newPractice = () => {
  stopTimer();
  timerSeconds.value = 0;
  timeIsUp.value = false;
  showTimer.value = true;
  examState.value = "idle";
  startTime.value = null;
  currentScreen.value = "start";
  showCozeGrader.value = false;
  questionText.value = "";
  answerText.value = "";
  imagePreview.value = "";
  toField.value = "";
  subjectField.value = "";
  aiGeneratedFields.value = false;
  aiResponseText.value = "";
};

// ── AI setup ──
const copyPrompt = async () => {
  try {
    await navigator.clipboard.writeText(AI_PROMPT);
    promptCopied.value = true;
    window.setTimeout(() => { promptCopied.value = false; }, 2000);
  } catch { /* ignore */ }
};
const parseAndStart = () => {
  const raw = aiResponseText.value.trim();
  if (!raw) { window.alert("请先粘贴 AI 的回复。"); return; }
  toField.value = extractTag(raw, "TO") || toField.value;
  subjectField.value = extractTag(raw, "SUBJECT") || subjectField.value;
  questionText.value = extractTag(raw, "QUESTION") || raw;
  aiGeneratedFields.value = true;
  currentScreen.value = "exam";
};
const goToExamManual = () => { aiGeneratedFields.value = false; currentScreen.value = "exam"; };
const goToAiSetup = () => { currentScreen.value = "ai-setup"; };
const goToSentenceBuilder = () => {
  if (guestMode.value) {
    requireLoginForFeature("Build a Sentence 限时练习");
    return;
  }
  selectedBuildSentenceQuiz.value = "";
  buildSentenceSubmitNotice.value = "";
  resetSentencePractice();
  currentScreen.value = "sentence-builder";
};
const startBuildSentenceQuiz = (quiz) => {
  selectedBuildSentenceQuiz.value = quiz.file;
  buildSentenceSubmitNotice.value = "";
};
const backToBuildSentencePicker = () => {
  selectedBuildSentenceQuiz.value = "";
  buildSentenceSubmitNotice.value = "";
};
const backToStart = () => {
  currentScreen.value = "start";
  selectedBuildSentenceQuiz.value = "";
  resetSentencePractice();
  aiResponseText.value = "";
  aiGeneratedFields.value = false;
  toField.value = "";
  subjectField.value = "";
  questionText.value = "";
};

onMounted(() => autoResizeAnswer());
watch(answerText, async () => { await nextTick(); autoResizeAnswer(); });
watch(selectedBuildSentenceQuiz, () => {
  buildSentenceSubmitNotice.value = "";
});
</script>

<template>
  <NavBar />

  <!-- ── Start screen ── -->
  <div v-if="currentScreen === 'start'" class="start-wrapper">
    <div class="start-card-outer">
      <p class="start-subtitle">选择题目来源，开始练习</p>
      <div class="start-options">
        <button class="option-card" @click="goToExamManual">
          <div class="option-icon">✏️</div>
          <div class="option-label">手动输入题目</div>
          <div class="option-desc">直接在练习界面粘贴或输入题目内容</div>
        </button>
        <button class="option-card" @click="goToAiSetup">
          <div class="option-icon">🤖</div>
          <div class="option-label">AI 生成题目</div>
          <div class="option-desc">借助 Claude / ChatGPT / 豆包 一键生成托福写作题</div>
        </button>
        <button
          class="option-card"
          :class="{ 'option-card-locked': guestMode }"
          :disabled="guestMode"
          @click="goToSentenceBuilder"
        >
          <div class="option-icon">⏱️</div>
          <div class="option-label">Build a Sentence 限时练习</div>
          <div class="option-desc">{{ guestMode ? "登录后可使用此练习" : "根据中文提示和关键词，限时写出完整英文句子" }}</div>
        </button>
      </div>
    </div>
  </div>

  <!-- ── AI setup screen ── -->
  <div v-else-if="currentScreen === 'ai-setup'" class="start-wrapper">
    <div class="ai-setup-card">
      <button class="back-btn" @click="backToStart">← 返回</button>
      <h2 class="ai-setup-title">AI 生成题目</h2>
      <div class="ai-step">
        <div class="ai-step-num">1</div>
        <div class="ai-step-body">
          <div class="ai-step-heading">复制以下提示词，前往 AI 助手生成题目</div>
          <div class="ai-prompt-box">{{ AI_PROMPT }}</div>
          <div class="ai-step-actions">
            <button class="ai-copy-btn" :class="{ copied: promptCopied }" @click="copyPrompt">
              {{ promptCopied ? "✓ 已复制" : "复制提示词" }}
            </button>
            <span class="ai-links-label">前往：</span>
            <a href="https://claude.ai" target="_blank" rel="noreferrer" class="ai-link ai-link-claude">Claude</a>
            <a href="https://chatgpt.com" target="_blank" rel="noreferrer" class="ai-link ai-link-gpt">ChatGPT</a>
            <a href="https://doubao.com" target="_blank" rel="noreferrer" class="ai-link ai-link-doubao">豆包</a>
          </div>
        </div>
      </div>
      <div class="ai-step">
        <div class="ai-step-num">2</div>
        <div class="ai-step-body">
          <div class="ai-step-heading">粘贴 AI 的完整回复</div>
          <textarea v-model="aiResponseText" class="ai-response-textarea" placeholder="在此处粘贴 AI 的回复内容..."></textarea>
          <button class="ai-parse-btn" @click="parseAndStart">解析并开始练习 →</button>
        </div>
      </div>
    </div>
  </div>

  <!-- ── Build a sentence screen ── -->
  <div v-else-if="currentScreen === 'sentence-builder'" class="sentence-wrapper">
    <div class="sentence-card sentence-embed-card">
      <div class="sentence-topbar">
        <button class="back-btn" @click="backToStart">← 返回</button>
        <div class="sentence-embed-heading">
          <h2 class="sentence-title">Build a Sentence 限时练习</h2>
          <p class="sentence-lead">
            {{ selectedBuildSentenceQuiz ? "完成练习后提交给老师，后台会同步记录正确率、用时和错题。" : "先选择一套真题。选择前不会加载练习页，倒计时也不会开始。" }}
          </p>
        </div>
      </div>

      <div v-if="!selectedBuildSentenceQuiz" class="sentence-picker-panel">
        <div class="sentence-picker-heading">
          <div>
            <h3 class="sentence-picker-title">选择真题套题</h3>
            <p class="sentence-picker-lead">每套题进入后按原考试节奏计时：10 题，6 分 50 秒。</p>
          </div>
          <span class="sentence-picker-count">{{ BUILD_SENTENCE_QUIZZES.length }} 套</span>
        </div>
        <div class="sentence-picker-grid">
          <button
            v-for="quiz in BUILD_SENTENCE_QUIZZES"
            :key="quiz.file"
            class="sentence-quiz-btn sentence-picker-btn"
            @click="startBuildSentenceQuiz(quiz)"
          >
            {{ quiz.label }}
          </button>
        </div>
      </div>

      <template v-else>
        <div class="sentence-quiz-picker sentence-quiz-picker-active">
          <button class="sentence-change-btn" @click="backToBuildSentencePicker">← 重新选题</button>
          <button
            v-for="quiz in BUILD_SENTENCE_QUIZZES"
            :key="quiz.file"
            class="sentence-quiz-btn"
            :class="{ active: selectedBuildSentenceQuiz === quiz.file }"
            @click="startBuildSentenceQuiz(quiz)"
          >
            {{ quiz.label }}
          </button>
        </div>

        <div class="sentence-iframe-title">{{ selectedBuildSentenceLabel }}</div>
        <div class="sentence-submit-row">
          <span class="sentence-submit-hint">完成练习后提交，老师会在 dashboard 看到正确率、用时和逐题作答。</span>
          <span v-if="buildSentenceSubmitNotice" class="sentence-submit-notice">{{ buildSentenceSubmitNotice }}</span>
          <button
            class="sentence-submit-btn"
            :disabled="buildSentenceSubmitLoading"
            @click="submitBuildSentenceAttempt"
          >
            {{ buildSentenceSubmitLoading ? "提交中…" : "提交给老师" }}
          </button>
        </div>
        <iframe
          ref="buildSentenceIframe"
          :key="selectedBuildSentenceQuiz"
          class="sentence-iframe"
          :src="selectedBuildSentenceUrl"
          title="Build a Sentence timed practice"
          @load="syncBuildSentenceStudentName"
        ></iframe>
      </template>
    </div>
  </div>

  <!-- ── Exam screen ── -->
  <div v-else class="exam-wrapper">
    <div class="exam-body">
      <!-- Left: Question panel -->
      <div class="question-panel">
        <div class="question-inner">
          <div v-if="aiGeneratedFields" class="question-rendered" v-html="renderMarkdown(questionText)"></div>
          <textarea
            v-else
            v-model="questionText"
            class="question-textarea"
            placeholder="Paste the question here, or Ctrl+V to paste a screenshot..."
            @paste="handleQuestionPaste"
          ></textarea>
          <img v-if="imagePreview" :src="imagePreview" class="image-preview" alt="Question image">
        </div>
        <div v-if="!aiGeneratedFields" class="question-upload">
          <label for="imgUpload" class="upload-label">Browse image...</label>
          <input id="imgUpload" type="file" accept="image/*" class="sr-only" @change="handleImageUpload">
        </div>
      </div>

      <!-- Right: Response panel -->
      <div class="response-panel">
        <!-- Pre-start overlay -->
        <div v-if="examState === 'idle'" class="exam-start-overlay">
          <div class="timer-setup">
            <label class="timer-setup-label">限时</label>
            <input
              v-model.number="timerMinutes"
              class="timer-setup-input"
              type="number"
              min="1"
              max="120"
            >
            <span class="timer-setup-unit">分钟</span>
          </div>
          <button class="exam-start-btn" @click="startPractice">开始练习</button>
          <p class="exam-start-hint">点击后进入全屏模拟考试环境</p>
        </div>

        <!-- Running state -->
        <template v-else>
          <div class="response-header"><strong>Your Response:</strong></div>
          <div class="response-meta">
            <div class="meta-row">
              <span class="meta-label">To:</span>
              <input
                v-model="toField"
                class="meta-input"
                :class="{ 'meta-input-locked': aiGeneratedFields || examState === 'submitted' }"
                type="text"
                placeholder="Recipient"
                :readonly="aiGeneratedFields || examState === 'submitted'"
              >
            </div>
            <div class="meta-row">
              <span class="meta-label">Subject:</span>
              <input
                v-model="subjectField"
                class="meta-input"
                :class="{ 'meta-input-locked': aiGeneratedFields || examState === 'submitted' }"
                type="text"
                placeholder="Subject"
                :readonly="aiGeneratedFields || examState === 'submitted'"
              >
            </div>
          </div>

          <div class="toolbar">
            <button class="toolbar-btn toolbar-btn-dark" :disabled="examState === 'submitted'" @click="cutText">Cut</button>
            <button class="toolbar-btn" :disabled="examState === 'submitted'" @click="pasteText">Paste</button>
            <button class="toolbar-btn" :disabled="examState === 'submitted'" @click="undoText">Undo</button>
            <button class="toolbar-btn" :disabled="examState === 'submitted'" @click="redoText">Redo</button>
            <div class="toolbar-spacer"></div>
            <span v-if="showTimer" class="timer-display" :class="{ 'timer-warning': timerWarning, 'timer-done': examState === 'submitted' || timeIsUp }">
              {{ timeIsUp ? "⏰ 00:00" : `⏱ ${formattedTimer}` }}
            </span>
            <button class="toolbar-btn toolbar-btn-muted" @click="showTimer = !showTimer">
              {{ showTimer ? "Hide Timer" : "Show Timer" }}
            </button>
            <button class="toolbar-btn toolbar-btn-muted" @click="showWordCount = !showWordCount">
              {{ showWordCount ? "Hide Word Count" : "Show Word Count" }}
            </button>
            <span v-if="showWordCount" class="word-count-display">{{ wordCount }}</span>
          </div>

          <div v-if="timeIsUp" class="timesup-banner">⏰ 时间到！请提交作答。</div>

          <textarea
            ref="answerTextarea"
            v-model="answerText"
            class="answer-textarea"
            placeholder="Begin writing here..."
            :readonly="examState === 'submitted'"
          ></textarea>

          <!-- Footer: only show Submit while running; Download/AI only after submitted -->
          <div class="response-footer">
            <template v-if="examState === 'running'">
              <button v-if="!guestMode" class="footer-btn btn-submit" @click="triggerSubmit">提交作答</button>
              <button v-else class="footer-btn btn-submit" @click="finishGuestPractice">完成练习</button>
            </template>
            <template v-if="examState === 'submitted'">
              <button class="footer-btn btn-export" @click="showDownloadConfirm = true">Download .doc</button>
              <button class="footer-btn btn-ai" :class="{ 'btn-locked': guestMode }" :disabled="guestMode" @click="openAiWarning">
                {{ guestMode ? "登录后 AI 批改" : "AI 批改" }}
              </button>
            </template>
          </div>
        </template>
      </div>
    </div>
  </div>

  <!-- ── Completion overlay (after submit) ── -->
  <div v-if="examState === 'submitted'" class="completion-overlay">
    <div class="completion-card">
      <div class="completion-icon">🎉</div>
      <h2 class="completion-title">练习完成！</h2>
      <p class="completion-stats">共写 <strong>{{ wordCount }}</strong> 词 &nbsp;·&nbsp; 用时 <strong>{{ formattedTimer }}</strong></p>
      <div class="completion-actions">
        <button class="completion-btn completion-btn-download" @click="showDownloadConfirm = true">Download .doc</button>
        <button
          class="completion-btn completion-btn-ai"
          :class="{ 'completion-btn-locked': guestMode }"
          :disabled="guestMode"
          @click="openAiWarning"
        >
          {{ guestMode ? "登录后 AI 批改" : "AI 批改" }}
        </button>
        <button class="completion-btn completion-btn-new" @click="newPractice">新练习</button>
      </div>
    </div>
  </div>

  <!-- AI grading modal -->
  <div v-if="showAiWarning" class="modal-overlay" @click.self="showAiWarning = false">
    <div class="modal-box">
      <div class="modal-icon">⚠️</div>
      <h2 class="modal-title">AI 批改提示</h2>
      <p class="modal-body">AI 评分仅供参考，不代表真实考试成绩。题目和作文将复制到剪贴板，并在本站打开 Coze 批改窗口。</p>
      <div class="modal-actions">
        <button class="modal-btn modal-btn-cancel" @click="showAiWarning = false">取消</button>
        <button class="modal-btn modal-btn-confirm" @click="confirmAiGrading">开始批改</button>
      </div>
    </div>
  </div>

  <!-- Login required modal -->
  <div v-if="showLoginRequired" class="modal-overlay" @click.self="showLoginRequired = false">
    <div class="modal-box">
      <div class="modal-icon">🔒</div>
      <h2 class="modal-title">需要登录</h2>
      <p class="modal-body">{{ loginRequiredMessage }}</p>
      <div class="modal-actions">
        <button class="modal-btn modal-btn-cancel" @click="showLoginRequired = false">知道了</button>
        <button class="modal-btn modal-btn-confirm" @click="goToLogin">去登录 / 注册</button>
      </div>
    </div>
  </div>

  <!-- Coze grading panel -->
  <div v-if="showCozeGrader" class="grader-overlay">
    <div class="grader-shell">
      <div class="grader-topbar">
        <div>
          <div class="grader-title">AI 批改</div>
          <div class="grader-subtitle">已复制题目和作文，请在右侧窗口粘贴发送</div>
        </div>
        <button class="grader-close-btn" @click="showCozeGrader = false">关闭</button>
      </div>
      <div class="grader-body">
        <div class="grader-context">
          <div class="grader-section-label">将发送给批改智能体的内容</div>
          <textarea class="grader-payload" :value="buildGradingPayload()" readonly></textarea>
          <button class="grader-copy-btn" @click="copyGradingPayload">重新复制</button>
        </div>
        <iframe
          class="grader-frame"
          :src="COZE_GRADER_URL"
          title="Coze AI grader"
          allow="clipboard-read; clipboard-write; microphone"
        ></iframe>
      </div>
    </div>
  </div>

  <!-- Download modal -->
  <div v-if="showDownloadConfirm" class="modal-overlay" @click.self="showDownloadConfirm = false">
    <div class="modal-box">
      <div class="modal-icon">📄</div>
      <h2 class="modal-title">下载确认</h2>
      <p class="modal-body">确认将当前内容下载为 .doc 文件吗？</p>
      <div class="modal-actions">
        <button class="modal-btn modal-btn-cancel" @click="showDownloadConfirm = false">取消</button>
        <button class="modal-btn modal-btn-confirm" @click="confirmDownload">确认下载</button>
      </div>
    </div>
  </div>

  <!-- Submit confirm modal -->
  <div v-if="showSubmitConfirm" class="modal-overlay" @click.self="showSubmitConfirm = false">
    <div class="modal-box">
      <div class="modal-icon">📤</div>
      <h2 class="modal-title">提交确认</h2>
      <p class="modal-body">确认将当前作答提交给老师吗？提交后将无法继续编辑。</p>
      <div class="modal-actions">
        <button class="modal-btn modal-btn-cancel" @click="showSubmitConfirm = false">取消</button>
        <button class="modal-btn modal-btn-confirm" :disabled="submitLoading" @click="confirmSubmit">
          {{ submitLoading ? "提交中…" : "确认提交" }}
        </button>
      </div>
    </div>
  </div>
</template>
