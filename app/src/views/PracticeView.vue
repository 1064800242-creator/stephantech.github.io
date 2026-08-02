<script setup>
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from "vue";
import { collection, addDoc, doc, updateDoc, serverTimestamp, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../composables/useAuth";
import NavBar from "../components/NavBar.vue";

const { user, userProfile, guestMode } = useAuth();

// ── Screen state ──
const currentScreen = ref("start"); // 'start' | 'ai-setup' | 'exam' | 'sentence-builder' | 'mistake-book'
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
const writingType = ref("email");
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
const graderLoading = ref(false);
const graderResult = ref("");
const graderError = ref("");
const graderPayload = ref("");
const currentWritingSubmissionId = ref("");

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

const GRADER_API_URL = import.meta.env.VITE_COZE_GRADER_API_URL
  || "https://toefl-writing-grader.stephaniefeng9.workers.dev/";
const LEGACY_COZE_GRADER_URL = "https://code.coze.cn/web-sdk/7658702600073855030";
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
const writingTypeLabel = computed(() => (
  writingType.value === "academic-discussion" ? "学术讨论" : "邮件"
));

// ── Student mistake book ──
const studentSubmissions = ref([]);
const mistakeBookLoading = ref(false);
const mistakeBookError = ref("");
const mistakePracticeState = ref("list"); // 'list' | 'running' | 'finished'
const mistakePracticeItems = ref([]);
const mistakePracticeAnswers = ref([]);
const mistakePracticeSeconds = ref(0);
const mistakePracticeStartTime = ref(null);
const mistakePracticeSubmitting = ref(false);
const mistakePracticeNotice = ref("");
let unsubStudentSubmissions = null;
let mistakePracticeTimerInterval = null;

const normalizeWordBank = (answer) => {
  if (Array.isArray(answer.wordBank) && answer.wordBank.length) return answer.wordBank;
  return String(answer.correctAnswer || "")
    .replace(/[?.!,]/g, "")
    .split(/\s+/)
    .filter(Boolean);
};

const buildFallbackBlankSentence = (answer) => {
  if (answer.blankSentence) return answer.blankSentence;
  const count = normalizeWordBank(answer).length || 1;
  return Array(count).fill("_____").join(" ");
};

const studentMistakeBookItems = computed(() => {
  const itemsByQuestion = new Map();
  studentSubmissions.value
    .filter((submission) =>
      submission.type === "build-sentence" &&
      submission.source !== "mistake-book" &&
      Array.isArray(submission.buildSentenceAnswers)
    )
    .forEach((submission) => {
      submission.buildSentenceAnswers
        .filter((answer) => answer && answer.isCorrect === false)
        .forEach((answer) => {
          const key = [
            submission.quizFile || submission.question || submission.subjectField || "Build a Sentence",
            answer.number || answer.question || "",
          ].join("|");
          const existing = itemsByQuestion.get(key);
          const submittedSeconds = submission.submittedAt?.seconds ?? 0;
          const item = {
            key,
            quizLabel: submission.question || submission.subjectField || "Build a Sentence",
            quizFile: submission.quizFile || "",
            number: answer.number || "—",
            question: answer.question || "",
            blankSentence: buildFallbackBlankSentence(answer),
            wordBank: normalizeWordBank(answer),
            correctAnswer: answer.correctAnswer || "",
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
    const quizCompare = a.quizLabel.localeCompare(b.quizLabel, "zh-CN");
    if (quizCompare) return quizCompare;
    return Number(a.number) - Number(b.number);
  });
});

const buildSentencePracticeCounts = computed(() => {
  const counts = new Map();
  studentSubmissions.value
    .filter((submission) => submission.type === "build-sentence" && submission.source !== "mistake-book")
    .forEach((submission) => {
      if (!submission.quizFile) return;
      counts.set(submission.quizFile, (counts.get(submission.quizFile) || 0) + 1);
    });
  return counts;
});

const buildSentencePracticeCount = (quizFile) => buildSentencePracticeCounts.value.get(quizFile) || 0;

const mistakePracticeTotalSeconds = computed(() => Math.max(41, mistakePracticeItems.value.length * 41));
const mistakePracticeFormattedTimer = computed(() => {
  const m = Math.floor(mistakePracticeSeconds.value / 60);
  const s = mistakePracticeSeconds.value % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
});
const mistakePracticeTimerWarning = computed(() => mistakePracticeSeconds.value <= 60 && mistakePracticeSeconds.value > 0);

const stopMistakePracticeTimer = () => {
  if (mistakePracticeTimerInterval) {
    clearInterval(mistakePracticeTimerInterval);
    mistakePracticeTimerInterval = null;
  }
};

const subscribeStudentSubmissions = (uid) => {
  if (unsubStudentSubmissions) unsubStudentSubmissions();
  if (!uid || guestMode.value) return;
  mistakeBookLoading.value = true;
  mistakeBookError.value = "";
  const q = query(collection(db, "submissions"), where("studentId", "==", uid));
  unsubStudentSubmissions = onSnapshot(q, (snap) => {
    const docs = snap.docs.map((docSnap) => ({ id: docSnap.id, ...docSnap.data() }));
    docs.sort((a, b) => (b.submittedAt?.seconds ?? 0) - (a.submittedAt?.seconds ?? 0));
    studentSubmissions.value = docs;
    mistakeBookLoading.value = false;
  }, (err) => {
    console.error("student submissions listener:", err);
    mistakeBookError.value = "暂时无法读取错题本，请稍后刷新页面重试。";
    mistakeBookLoading.value = false;
  });
};

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
  stopMistakePracticeTimer();
  if (unsubStudentSubmissions) unsubStudentSubmissions();
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
  const parts = [`题型：${writingTypeLabel.value}`];
  parts.push(`题目：\n${questionText.value.trim() || "缺少题目"}`);
  if (toField.value.trim()) parts.push(`To：${toField.value.trim()}`);
  if (subjectField.value.trim()) parts.push(`Subject：${subjectField.value.trim()}`);
  parts.push(`学生作文：\n${answerText.value.trim() || "缺少学生作文"}`);
  parts.push("是否需要老师模式：否");
  return parts.join("\n\n");
};

const extractAiScore = (text) => {
  const raw = String(text || "");
  const scoreLine = raw.match(/(?:分数|预估分数|得分)\s*[:：]\s*([^\n]+)/i);
  if (scoreLine?.[1]) {
    const conciseScore = scoreLine[1].match(/\d+(?:\.\d+)?(?:\s*\/\s*\d+(?:\.\d+)?)?/);
    if (conciseScore?.[0]) return conciseScore[0].replace(/\s+/g, "");
  }
  const scoreFraction = raw.match(/(\d+(?:\.\d+)?)\s*\/\s*(?:5|30|100)\b/);
  if (scoreFraction?.[0]) return scoreFraction[0].trim();
  const scoreNumber = raw.match(/(?:score|评分)\s*[:：]?\s*(\d+(?:\.\d+)?)/i);
  return scoreNumber?.[1] || "";
};

const submissionTeacherId = () => {
  if (userProfile.value?.role === "teacher") return user.value?.uid || null;
  return userProfile.value?.teacherId || null;
};

const isTeacherAccount = computed(() => userProfile.value?.role === "teacher");
const shouldSaveSubmission = computed(() => !guestMode.value && !isTeacherAccount.value);

const ensureSubmissionTarget = () => {
  if (isTeacherAccount.value) return true;
  if (submissionTeacherId()) return true;
  window.alert("当前账号没有绑定老师，无法保存提交记录。请使用邀请码注册学生账号，或使用老师账号重新登录。");
  return false;
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
  if (!ensureSubmissionTarget()) return;
  if (!shouldSaveSubmission.value) {
    buildSentenceSubmitNotice.value = "老师测试模式：未保存记录";
    window.alert("✅ 老师账号测试完成，不会保存到学生提交记录。");
    return;
  }
  buildSentenceSubmitLoading.value = true;
  buildSentenceSubmitNotice.value = "";
  try {
    await addDoc(collection(db, "submissions"), {
      type: "build-sentence",
      studentId: user.value.uid,
      studentName: userProfile.value?.name || user.value.email,
      teacherId: submissionTeacherId(),
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

const formatMistakePracticeAnswer = (attempt) => [
  "Build a Sentence 错题本再练",
  `Score: ${attempt.correctCount}/${attempt.totalQuestions} (${attempt.accuracy}%)`,
  "",
  ...attempt.answers.map((item) => [
    `${item.number}. ${item.question}`,
    `Student: ${item.userAnswer}`,
    `Correct: ${item.correctAnswer}`,
    `Result: ${item.isCorrect ? "Correct" : "Incorrect"}`,
  ].join("\n")),
].join("\n\n");

const startMistakePractice = () => {
  if (guestMode.value) {
    requireLoginForFeature("错题本");
    return;
  }
  const items = studentMistakeBookItems.value;
  if (items.length === 0) {
    window.alert("目前还没有 Build a Sentence 错题。");
    return;
  }
  stopMistakePracticeTimer();
  mistakePracticeItems.value = items.map((item) => ({
    ...item,
    wordBank: [...item.wordBank],
  }));
  mistakePracticeAnswers.value = mistakePracticeItems.value.map(() => []);
  mistakePracticeSeconds.value = Math.max(41, mistakePracticeItems.value.length * 41);
  mistakePracticeStartTime.value = Date.now();
  mistakePracticeState.value = "running";
  mistakePracticeNotice.value = "";
  mistakePracticeTimerInterval = setInterval(() => {
    if (mistakePracticeSeconds.value > 0) {
      mistakePracticeSeconds.value--;
    } else {
      stopMistakePracticeTimer();
      mistakePracticeState.value = "finished";
    }
  }, 1000);
};

const resetMistakePractice = () => {
  stopMistakePracticeTimer();
  mistakePracticeState.value = "list";
  mistakePracticeItems.value = [];
  mistakePracticeAnswers.value = [];
  mistakePracticeSeconds.value = 0;
  mistakePracticeStartTime.value = null;
  mistakePracticeNotice.value = "";
};

const mistakeBlankTokens = (item) =>
  String(item.blankSentence || "")
    .split(/(_____)/g)
    .map((part) => part.trim())
    .filter(Boolean);

const availableMistakeWords = (item, index) => {
  const used = mistakePracticeAnswers.value[index] || [];
  return item.wordBank.filter((word, wordIndex) => !used.some((answer) => answer.word === word && answer.wordIndex === wordIndex));
};

const availableMistakeWordOptions = (item, index) => {
  const used = mistakePracticeAnswers.value[index] || [];
  return item.wordBank
    .map((word, wordIndex) => ({ word, wordIndex }))
    .filter((option) => !used.some((answer) => answer.word === option.word && answer.wordIndex === option.wordIndex));
};

const placeMistakeWord = (itemIndex, word, wordIndex) => {
  if (mistakePracticeState.value !== "running") return;
  const answers = [...(mistakePracticeAnswers.value[itemIndex] || [])];
  const blankCount = mistakeBlankTokens(mistakePracticeItems.value[itemIndex]).filter((part) => part === "_____").length;
  if (answers.length >= blankCount) return;
  answers.push({ word, wordIndex });
  mistakePracticeAnswers.value[itemIndex] = answers;
};

const removeMistakeWord = (itemIndex, answerIndex) => {
  if (mistakePracticeState.value !== "running") return;
  const answers = [...(mistakePracticeAnswers.value[itemIndex] || [])];
  answers.splice(answerIndex, 1);
  mistakePracticeAnswers.value[itemIndex] = answers;
};

const handleMistakeDragStart = (event, word, wordIndex) => {
  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setData("text/plain", JSON.stringify({ word, wordIndex }));
};

const handleMistakeDrop = (event, itemIndex) => {
  event.preventDefault();
  try {
    const payload = JSON.parse(event.dataTransfer.getData("text/plain"));
    placeMistakeWord(itemIndex, payload.word, payload.wordIndex);
  } catch {
    // Ignore malformed drag payloads.
  }
};

const renderMistakeAnswerParts = (item, itemIndex) => {
  const answers = mistakePracticeAnswers.value[itemIndex] || [];
  let answerCursor = 0;
  return mistakeBlankTokens(item).map((part) => {
    if (part !== "_____") return { type: "text", text: part };
    const answer = answers[answerCursor];
    const currentIndex = answerCursor;
    answerCursor++;
    return {
      type: "blank",
      text: answer?.word || "",
      answerIndex: currentIndex,
    };
  });
};

const collectMistakePracticeAttempt = () => {
  let correctCount = 0;
  const answers = mistakePracticeItems.value.map((item, index) => {
    const userAnswer = renderMistakeAnswerParts(item, index)
      .map((part) => part.type === "blank" ? (part.text || "___") : part.text)
      .join(" ");
    const isCorrect = cleanSentenceForCompare(userAnswer) === cleanSentenceForCompare(item.correctAnswer);
    if (isCorrect) correctCount++;
    return {
      number: item.number,
      question: item.question,
      blankSentence: item.blankSentence,
      wordBank: item.wordBank,
      userAnswer,
      correctAnswer: item.correctAnswer,
      isCorrect,
    };
  });

  return {
    answers,
    correctCount,
    totalQuestions: answers.length,
    accuracy: Math.round((correctCount / answers.length) * 100),
    timeUsedSeconds: Math.round((Date.now() - mistakePracticeStartTime.value) / 1000),
  };
};

const submitMistakePracticeAttempt = async () => {
  if (guestMode.value) {
    requireLoginForFeature("错题本提交记录");
    return;
  }
  const attempt = collectMistakePracticeAttempt();
  const hasEmpty = attempt.answers.some((answer) => answer.userAnswer.includes("___"));
  if (hasEmpty) {
    window.alert("还有空格没有完成，请填完后再提交。");
    return;
  }
  if (!ensureSubmissionTarget()) return;
  if (!shouldSaveSubmission.value) {
    stopMistakePracticeTimer();
    mistakePracticeState.value = "finished";
    mistakePracticeNotice.value = "老师测试模式：未保存记录";
    window.alert("✅ 老师账号测试完成，不会保存到学生提交记录。");
    return;
  }
  stopMistakePracticeTimer();
  mistakePracticeSubmitting.value = true;
  mistakePracticeNotice.value = "";
  try {
    await addDoc(collection(db, "submissions"), {
      type: "build-sentence",
      source: "mistake-book",
      studentId: user.value.uid,
      studentName: userProfile.value?.name || user.value.email,
      teacherId: submissionTeacherId(),
      question: "Build a Sentence 错题本再练",
      quizFile: "mistake-book",
      toField: "Build a Sentence",
      subjectField: "Build a Sentence - 错题本再练",
      answer: formatMistakePracticeAnswer(attempt),
      buildSentenceAnswers: attempt.answers,
      correctCount: attempt.correctCount,
      totalQuestions: attempt.totalQuestions,
      accuracy: attempt.accuracy,
      wordCount: null,
      timeUsedSeconds: attempt.timeUsedSeconds,
      submittedAt: serverTimestamp(),
    });
    mistakePracticeState.value = "finished";
    mistakePracticeNotice.value = "已提交给老师";
    window.alert("✅ 错题本练习记录已提交给老师。");
  } catch (err) {
    window.alert(`提交失败：${err.message}`);
  } finally {
    mistakePracticeSubmitting.value = false;
  }
};

// ── Start practice ──
const startPractice = () => {
  currentWritingSubmissionId.value = "";
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
  await startAiGrading();
};

const startAiGrading = async () => {
  showCozeGrader.value = true;
  graderPayload.value = buildGradingPayload();
  graderResult.value = "";
  graderError.value = "";
  if (!GRADER_API_URL) {
    try {
      await navigator.clipboard.writeText(graderPayload.value);
    } catch {
      // The fallback iframe still lets the user copy the payload manually.
    }
    return;
  }
  await runAiGrading();
};

const runAiGrading = async () => {
  graderLoading.value = true;
  graderError.value = "";
  graderResult.value = "";
  try {
    const response = await fetch(GRADER_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        prompt: graderPayload.value || buildGradingPayload(),
        userId: user.value?.uid || "guest",
      }),
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      throw new Error(data.error || "批改服务暂时没有返回结果。");
    }
    graderResult.value = data.result || "AI 没有返回可显示的批改内容，请稍后再试。";
    if (currentWritingSubmissionId.value && graderResult.value) {
      try {
        await updateDoc(doc(db, "submissions", currentWritingSubmissionId.value), {
          aiScore: extractAiScore(graderResult.value),
          aiFeedback: graderResult.value,
          aiGradedAt: serverTimestamp(),
        });
      } catch (saveError) {
        console.error("save AI score:", saveError);
      }
    }
  } catch (err) {
    graderError.value = err.message || "批改失败，请稍后重试。";
  } finally {
    graderLoading.value = false;
  }
};

const copyGradingPayload = async () => {
  try {
    await navigator.clipboard.writeText(graderPayload.value || buildGradingPayload());
    window.alert("✅ 已重新复制。");
  } catch {
    window.alert("复制失败，请手动复制左侧内容。");
  }
};

const copyGradingResult = async () => {
  if (!graderResult.value) return;
  try {
    await navigator.clipboard.writeText(graderResult.value);
    window.alert("✅ 批改结果已复制。");
  } catch {
    window.alert("复制失败，请手动复制批改结果。");
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
  if (!ensureSubmissionTarget()) return;
  if (!shouldSaveSubmission.value) {
    currentWritingSubmissionId.value = "";
    examState.value = "submitted";
    return;
  }
  submitLoading.value = true;
  try {
    const submissionRef = await addDoc(collection(db, "submissions"), {
      type: writingType.value,
      studentId: user.value.uid,
      studentName: userProfile.value?.name || user.value.email,
      teacherId: submissionTeacherId(),
      question: questionText.value,
      toField: toField.value,
      subjectField: subjectField.value,
      answer: answerText.value,
      wordCount: wordCount.value,
      timeUsedSeconds: timerMinutes.value * 60,
      aiGenerated: aiGeneratedFields.value,
      submittedAt: serverTimestamp(),
    });
    currentWritingSubmissionId.value = submissionRef.id;
    examState.value = "submitted";
    if (GRADER_API_URL) startAiGrading();
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
  if (!ensureSubmissionTarget()) return;
  if (!shouldSaveSubmission.value) {
    currentWritingSubmissionId.value = "";
    stopTimer();
    examState.value = "submitted";
    return;
  }
  submitLoading.value = true;
  try {
    stopTimer();
    const submissionRef = await addDoc(collection(db, "submissions"), {
      type: writingType.value,
      studentId: user.value.uid,
      studentName: userProfile.value?.name || user.value.email,
      teacherId: submissionTeacherId(),
      question: questionText.value,
      toField: toField.value,
      subjectField: subjectField.value,
      answer: answerText.value,
      wordCount: wordCount.value,
      timeUsedSeconds: timerMinutes.value * 60 - timerSeconds.value,
      aiGenerated: aiGeneratedFields.value,
      submittedAt: serverTimestamp(),
    });
    currentWritingSubmissionId.value = submissionRef.id;
    examState.value = "submitted";
    if (GRADER_API_URL) startAiGrading();
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
const goToMistakeBook = () => {
  if (guestMode.value) {
    requireLoginForFeature("错题本");
    return;
  }
  resetMistakePractice();
  currentScreen.value = "mistake-book";
};
const goToRecords = () => {
  if (guestMode.value) {
    requireLoginForFeature("我的练习记录");
    return;
  }
  window.location.hash = "#/records";
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
  resetMistakePractice();
  resetSentencePractice();
  aiResponseText.value = "";
  aiGeneratedFields.value = false;
  writingType.value = "email";
  currentWritingSubmissionId.value = "";
  toField.value = "";
  subjectField.value = "";
  questionText.value = "";
};

onMounted(() => {
  autoResizeAnswer();
  if (user.value?.uid && !guestMode.value) subscribeStudentSubmissions(user.value.uid);
});
watch(user, (nextUser) => {
  if (nextUser?.uid && !guestMode.value) subscribeStudentSubmissions(nextUser.uid);
});
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
        <button class="option-card" @click="$router.push('/true-practice/email')">
          <div class="option-icon option-icon-text">E</div>
          <div class="option-label">Email 真题练习</div>
          <div class="option-desc">按情景标签选择真题，进入 7 分钟模考界面</div>
        </button>
        <button class="option-card" @click="$router.push('/true-practice/academic')">
          <div class="option-icon option-icon-text">A</div>
          <div class="option-label">学术讨论真题练习</div>
          <div class="option-desc">按主题与讨论类型选题，进入 10 分钟模考界面</div>
        </button>
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
        <button
          class="option-card"
          :class="{ 'option-card-locked': guestMode }"
          :disabled="guestMode"
          @click="goToMistakeBook"
        >
          <div class="option-icon">📒</div>
          <div class="option-label">我的错题本</div>
          <div class="option-desc">{{ guestMode ? "登录后可查看错题本" : "查看并重做自己曾经错过的 Build Sentence 题" }}</div>
        </button>
        <button
          class="option-card"
          :class="{ 'option-card-locked': guestMode }"
          :disabled="guestMode"
          @click="goToRecords"
        >
          <div class="option-icon">📊</div>
          <div class="option-label">我的练习记录</div>
          <div class="option-desc">{{ guestMode ? "登录后可查看记录" : "查看每一次练习、正确率和 AI 评分" }}</div>
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
            {{ selectedBuildSentenceQuiz ? (isTeacherAccount ? "老师账号可测试练习流程，但不会保存到学生提交记录。" : "完成练习后提交给老师，后台会同步记录正确率、用时和错题。") : "先选择一套真题。选择前不会加载练习页，倒计时也不会开始。" }}
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
            :class="{ practiced: buildSentencePracticeCount(quiz.file) > 0 }"
            @click="startBuildSentenceQuiz(quiz)"
          >
            <span>{{ quiz.label }}</span>
            <small v-if="buildSentencePracticeCount(quiz.file) > 0">再次练习 · 已练 {{ buildSentencePracticeCount(quiz.file) }} 次</small>
            <small v-else>第一次练习</small>
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
            :class="{ active: selectedBuildSentenceQuiz === quiz.file, practiced: buildSentencePracticeCount(quiz.file) > 0 }"
            @click="startBuildSentenceQuiz(quiz)"
          >
            {{ quiz.label }}<span v-if="buildSentencePracticeCount(quiz.file) > 0"> · 再次</span>
          </button>
        </div>

        <div class="sentence-iframe-title">{{ selectedBuildSentenceLabel }}</div>
        <div class="sentence-submit-row">
          <span class="sentence-submit-hint">{{ isTeacherAccount ? "老师测试模式：提交后只结束本次练习，不写入 dashboard。" : "完成练习后提交，老师会在 dashboard 看到正确率、用时和逐题作答。" }}</span>
          <span v-if="buildSentenceSubmitNotice" class="sentence-submit-notice">{{ buildSentenceSubmitNotice }}</span>
          <button
            class="sentence-submit-btn"
            :disabled="buildSentenceSubmitLoading"
            @click="submitBuildSentenceAttempt"
          >
          {{ buildSentenceSubmitLoading ? "提交中…" : (isTeacherAccount ? "完成测试" : "提交给老师") }}
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

  <!-- ── Student mistake book screen ── -->
  <div v-else-if="currentScreen === 'mistake-book'" class="sentence-wrapper">
    <div class="sentence-card mistake-practice-card">
      <div class="sentence-topbar">
        <button class="back-btn" @click="backToStart">← 返回</button>
        <div class="sentence-embed-heading">
          <h2 class="sentence-title">我的 Build Sentence 错题本</h2>
          <p class="sentence-lead">{{ isTeacherAccount ? "老师账号可查看测试流程；学生账号会在这里看到自己的错题本。" : "这里会实时收录你曾经做错过的题。错题练习不提供答案，提交后老师会在 dashboard 看到记录。" }}</p>
        </div>
        <div
          v-if="mistakePracticeState === 'running'"
          class="sentence-timer"
          :class="{ 'timer-warning': mistakePracticeTimerWarning }"
        >
          {{ mistakePracticeFormattedTimer }}
        </div>
      </div>

      <div v-if="mistakeBookError" class="mistake-practice-alert">{{ mistakeBookError }}</div>

      <template v-if="mistakePracticeState === 'list'">
        <div class="mistake-practice-summary">
          <div>
            <div class="mistake-summary-num">{{ studentMistakeBookItems.length }}</div>
            <div class="mistake-summary-label">当前错题数</div>
          </div>
          <div>
            <div class="mistake-summary-num">{{ formatTime(studentMistakeBookItems.length * 41) }}</div>
            <div class="mistake-summary-label">建议限时</div>
          </div>
          <button
            class="sentence-submit-btn"
            :disabled="mistakeBookLoading || studentMistakeBookItems.length === 0"
            @click="startMistakePractice"
          >
            {{ mistakeBookLoading ? "读取中…" : "开始错题练习" }}
          </button>
        </div>

        <div class="mistake-book-note">
          计时按每题 41 秒计算；错题数量不必凑满 10 题，系统会按当前错题数自动给时间。
        </div>

        <div class="mistake-preview-list">
          <div v-for="item in studentMistakeBookItems" :key="item.key" class="mistake-preview-item">
            <div class="mistake-preview-head">
              <span>{{ item.quizLabel }} - 第 {{ item.number }} 题</span>
              <span>错过 {{ item.wrongCount }} 次</span>
            </div>
            <div class="mistake-preview-question">{{ item.question }}</div>
            <div class="mistake-blank-sentence">{{ item.blankSentence }}</div>
            <div class="mistake-wordbank">{{ item.wordBank.join(" / ") }}</div>
          </div>
          <div v-if="!mistakeBookLoading && studentMistakeBookItems.length === 0" class="dash-empty">
            目前还没有 Build Sentence 错题。完成并提交一次 Build Sentence 后，这里会自动更新。
          </div>
        </div>
      </template>

      <template v-else>
        <div class="mistake-practice-toolbar">
          <span>{{ mistakePracticeItems.length }} 题 · 建议限时 {{ formatTime(mistakePracticeTotalSeconds) }}</span>
          <span v-if="mistakePracticeNotice" class="sentence-submit-notice">{{ mistakePracticeNotice }}</span>
          <button
            v-if="mistakePracticeState === 'running'"
            class="sentence-submit-btn"
            :disabled="mistakePracticeSubmitting"
            @click="submitMistakePracticeAttempt"
          >
            {{ mistakePracticeSubmitting ? "提交中…" : (isTeacherAccount ? "完成测试" : "提交给老师") }}
          </button>
          <button v-else class="sentence-change-btn" @click="resetMistakePractice">返回错题本</button>
        </div>

        <div class="mistake-drill-list">
          <div v-for="(item, itemIndex) in mistakePracticeItems" :key="item.key" class="mistake-drill-item">
            <div class="mistake-preview-head">
              <span>{{ itemIndex + 1 }}. {{ item.quizLabel }} - 第 {{ item.number }} 题</span>
              <span>{{ item.question }}</span>
            </div>
            <div
              class="mistake-answer-area"
              @dragover.prevent
              @drop="handleMistakeDrop($event, itemIndex)"
            >
              <template v-for="(part, partIndex) in renderMistakeAnswerParts(item, itemIndex)" :key="`${item.key}-${partIndex}`">
                <span v-if="part.type === 'text'" class="mistake-static-text">{{ part.text }}</span>
                <button
                  v-else
                  type="button"
                  class="mistake-drop-box"
                  :class="{ filled: part.text }"
                  @click="part.text && removeMistakeWord(itemIndex, part.answerIndex)"
                >
                  {{ part.text || "拖到这里" }}
                </button>
              </template>
            </div>
            <div class="mistake-word-zone">
              <span
                v-for="option in availableMistakeWordOptions(item, itemIndex)"
                :key="`${item.key}-${option.wordIndex}`"
                class="mistake-draggable"
                draggable="true"
                @dragstart="handleMistakeDragStart($event, option.word, option.wordIndex)"
                @click="placeMistakeWord(itemIndex, option.word, option.wordIndex)"
              >
                {{ option.word }}
              </span>
            </div>
            <div v-if="mistakePracticeState === 'finished'" class="mistake-result-line">
              {{ collectMistakePracticeAttempt().answers[itemIndex]?.isCorrect ? "Correct" : "Incorrect" }}
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>

  <!-- ── Exam screen ── -->
  <div v-else class="exam-wrapper">
    <div class="exam-body">
      <!-- Left: Question panel -->
      <div class="question-panel">
        <div class="writing-type-switch">
          <span class="writing-type-label">题型</span>
          <button
            class="writing-type-btn"
            :class="{ active: writingType === 'email' }"
            :disabled="examState === 'submitted'"
            @click="writingType = 'email'"
          >
            邮件
          </button>
          <button
            class="writing-type-btn"
            :class="{ active: writingType === 'academic-discussion' }"
            :disabled="examState === 'submitted'"
            @click="writingType = 'academic-discussion'"
          >
            学术讨论
          </button>
        </div>
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
      <p class="modal-body">AI 评分仅供参考，不代表真实考试成绩。后端连接完成后，题目和作文会直接发送给批改服务，并在本站显示结果。</p>
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
          <div class="grader-subtitle">{{ GRADER_API_URL ? "题目和作文会在本站完成批改，不需要跳转或登录 Coze" : "当前使用临时 Coze 窗口；连接后端后会直接显示批改结果" }}</div>
        </div>
        <button class="grader-close-btn" @click="showCozeGrader = false">关闭</button>
      </div>
      <div class="grader-body">
        <div class="grader-context">
          <div class="grader-section-label">发送给批改智能体的内容</div>
          <textarea class="grader-payload" :value="graderPayload || buildGradingPayload()" readonly></textarea>
          <button class="grader-copy-btn" @click="copyGradingPayload">重新复制</button>
        </div>
        <div v-if="GRADER_API_URL" class="grader-result-panel">
          <div v-if="graderLoading" class="grader-loading">
            <div class="grader-spinner"></div>
            <div>正在批改，请稍等...</div>
          </div>
          <div v-else-if="graderError" class="grader-error">
            <div class="grader-error-title">暂时无法批改</div>
            <p>{{ graderError }}</p>
            <button v-if="GRADER_API_URL" class="grader-copy-btn" @click="runAiGrading">重试</button>
          </div>
          <div v-else-if="graderResult" class="grader-result">
            <div class="grader-result-actions">
              <div class="grader-section-label">批改结果</div>
              <button class="grader-copy-btn" @click="copyGradingResult">复制结果</button>
            </div>
            <pre>{{ graderResult }}</pre>
          </div>
          <div v-else class="grader-empty">点击“开始批改”后，结果会显示在这里。</div>
        </div>
        <div v-else class="grader-legacy-panel">
          <div class="grader-fallback-note">后端还没连接，暂时使用原 Coze 窗口。题目和作文已尝试复制，请在窗口中粘贴发送。</div>
          <iframe
            class="grader-frame"
            :src="LEGACY_COZE_GRADER_URL"
            title="Coze AI grader"
            allow="clipboard-read; clipboard-write; microphone"
          ></iframe>
        </div>
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
      <p class="modal-body">{{ isTeacherAccount ? "确认结束本次老师测试吗？不会保存到学生提交记录。" : "确认将当前作答提交给老师吗？提交后将无法继续编辑。" }}</p>
      <div class="modal-actions">
        <button class="modal-btn modal-btn-cancel" @click="showSubmitConfirm = false">取消</button>
        <button class="modal-btn modal-btn-confirm" :disabled="submitLoading" @click="confirmSubmit">
          {{ submitLoading ? "提交中…" : (isTeacherAccount ? "确认结束" : "确认提交") }}
        </button>
      </div>
    </div>
  </div>
</template>
