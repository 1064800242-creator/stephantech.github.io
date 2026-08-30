<script setup>
import { computed, ref, watch } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const activeStage = ref(0);
const maxUnlockedStage = ref(0);
const cardSaved = ref(false);
const defaultDraft = `From my perspective, it is impossible for a full-time job person maintaining a healthy social life. Imagine you are under high pressure in a big company, your peer are competitive with high professional ability and technical skills. After working, the only thing you need is to take a break and doing things without thinking. For example, I was used to believe I am a high-energy person. However, when I start an internship, I felt my full of energy were lost and just want to stay alone. They cannot balanced.`;
const draftText = ref(sessionStorage.getItem("demoCurrentAnswer") || defaultDraft);
const answers = ref([null, null, null]);
const quizSubmitted = ref(false);
const rewriteText = ref("");
const rewriteChecked = ref(false);
const activeDiagnosisId = ref("verb");

const diagnosisCategories = [
  {
    id: "verb",
    short: "句子骨架",
    title: "动词与句子骨架",
    level: "高频 · 高影响",
    signal: 94,
    summary: "多处错误会直接破坏完整句，是其他表达能力的前置基础。",
    impact: "如果句子的核心谓语不稳定，即使观点和例子不错，也会持续影响语言准确性与可读性。",
    evidence: [
      { source: "for a full-time job person maintaining...", issue: "固定句型与非谓语结构错误" },
      { source: "I was used to believe...", issue: "used to 与 be used to 混淆" },
      { source: "They cannot balanced.", issue: "情态动词后的被动结构错误" },
    ],
  },
  {
    id: "tense",
    short: "时态与一致",
    title: "时态与主谓一致",
    level: "多处 · 中高影响",
    signal: 77,
    summary: "过去经历与一般判断混写，且出现名词单复数和谓语不一致。",
    impact: "这些错误需要修复，但可以在动词骨架稳定后合并进入下一轮训练。",
    evidence: [
      { source: "your peer are competitive", issue: "名词单复数与主谓一致" },
      { source: "when I start ... I felt", issue: "同一过去经历中的时态不一致" },
      { source: "I used to believe I am...", issue: "过去叙述中的时态衔接" },
    ],
  },
  {
    id: "vocab",
    short: "词汇与搭配",
    title: "词汇与固定搭配",
    level: "多处 · 中影响",
    signal: 59,
    summary: "意思基本可理解，但部分中式搭配降低了表达的自然度。",
    impact: "当前不是最阻碍理解的问题，先保证句子站得住，再提升自然度更高效。",
    evidence: [
      { source: "a full-time job person", issue: "名词搭配不自然" },
      { source: "After working", issue: "语境中更自然的搭配是 after work" },
      { source: "my full of energy were lost", issue: "表达方式与搭配不自然" },
    ],
  },
  {
    id: "task",
    short: "任务与论证",
    title: "任务回应与论证严谨性",
    level: "2 项 · 中影响",
    signal: 46,
    summary: "观点与例子完整，但对已有讨论的承接不够显性，结尾略绝对。",
    impact: "这不等于作文不合格；它是内容质量的优化项，暂不抢占基础语言训练。",
    evidence: [
      { source: "未明确承接 Andrew / Claire 的观点", issue: "对讨论的参与感可以更清楚" },
      { source: "it is impossible / They cannot...", issue: "结论过于绝对，可增加条件限制" },
    ],
  },
];

const activeDiagnosis = computed(() => diagnosisCategories.find((item) => item.id === activeDiagnosisId.value) || diagnosisCategories[0]);

const stages = [
  { label: "提交作文", hint: "真实输入" },
  { label: "教学取舍", hint: "只抓 1 个" },
  { label: "微型训练", hint: "现场作答" },
  { label: "定向改写", hint: "自主修复" },
  { label: "重新规划", hint: "结果分流" },
];

const progress = computed(() => `${(activeStage.value / (stages.length - 1)) * 100}%`);

const next = () => {
  if (activeStage.value < stages.length - 1) {
    activeStage.value += 1;
    maxUnlockedStage.value = Math.max(maxUnlockedStage.value, activeStage.value);
  }
};
const openStage = (index) => {
  if (index <= maxUnlockedStage.value) activeStage.value = index;
};

const quizQuestions = [
  {
    stem: "I ___ consider myself a high-energy person.",
    options: ["was used to", "used to", "am used to"],
    correct: 1,
    rule: "used to do 表示过去常常；be used to doing 表示习惯于。",
  },
  {
    stem: "The only thing I wanted to do was ___ at home.",
    options: ["staying", "stay", "to staying"],
    correct: 1,
    rule: "主语含 do 时，表语中的不定式通常省略 to：was stay。",
  },
  {
    stem: "When I started the internship, I ___ completely drained.",
    options: ["feel", "felt", "am feeling"],
    correct: 1,
    rule: "叙述同一段过去经历时，谓语时态需要保持一致。",
  },
];

const quizComplete = computed(() => answers.value.every((answer) => answer !== null));
const quizScore = computed(() => answers.value.reduce((score, answer, index) => score + (answer === quizQuestions[index].correct ? 1 : 0), 0));
const rewritePassed = computed(() => {
  const normalized = rewriteText.value.toLowerCase().replace(/\s+/g, " ");
  const hasUsedTo = normalized.includes("used to consider");
  const hasWantedToStay = normalized.includes("wanted to stay") || normalized.includes("wanted to do was stay");
  return hasUsedTo && hasWantedToStay;
});

watch(rewriteText, () => {
  if (rewriteChecked.value) rewriteChecked.value = false;
});

const submitQuiz = () => {
  if (!quizComplete.value) return;
  quizSubmitted.value = true;
};

const checkRewrite = () => {
  rewriteChecked.value = true;
  if (rewritePassed.value) cardSaved.value = true;
};

const resetDemo = () => {
  activeStage.value = 0;
  maxUnlockedStage.value = 0;
  answers.value = [null, null, null];
  quizSubmitted.value = false;
  rewriteText.value = "";
  rewriteChecked.value = false;
  cardSaved.value = false;
  activeDiagnosisId.value = "verb";
};

const jumpToDemo = () => {
  document.querySelector("#coach-demo")?.scrollIntoView({ behavior: "smooth" });
};

const openCoachHome = () => {
  activeStage.value = 0;
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const openMistakeMemory = () => {
  router.push('/mistake-notebook');
};
</script>

<template>
  <div class="coach-page">
    <aside class="product-sidebar">
      <button class="brand" @click="router.push('/')">TWI<span>beta</span></button>
      <nav class="side-nav">
        <button class="side-link" @click="router.push('/demo-practice')"><i>✎</i><span>写作练习</span></button>
        <button class="side-link active" @click="openCoachHome"><i>◎</i><span>AI 学习教练</span></button>
        <button class="side-link" @click="router.push('/demo-records')"><i>▤</i><span>我的记录</span></button>
        <button class="side-link" @click="openMistakeMemory"><i>◇</i><span>智能错题本</span><b>3</b></button>
      </nav>
      <div class="student-profile">
        <div class="avatar">A</div>
        <p><strong>Student A</strong><span>距离考试 30 天</span></p>
      </div>
    </aside>

    <main class="product-main">
      <header class="workspace-header">
        <div>
          <span>AI PERSONAL WRITING COACH</span>
          <h1>下午好，Alex</h1>
        </div>
        <div class="nav-actions">
          <div class="case-switch"><button class="active">案例 A · 语言</button><button @click="router.push('/learning-coach/steec')">案例 B · STEEC</button></div>
          <span class="roadshow-badge"><i></i> 真实匿名案例</span>
          <button class="ghost-button" @click="router.push('/practice')">退出演示</button>
        </div>
      </header>

      <section class="today-grid">
        <article class="today-focus">
          <div class="focus-copy">
            <span class="section-kicker">TODAY'S FOCUS · 10 MIN</span>
            <h2>今天只练一件事：<em>动词骨架稳定性</em></h2>
            <p>AI 在这篇初稿中识别出 4 类问题与多处证据。它先展示完整诊断，再根据得分影响、出现频率和前置依赖，只布置今天最值得练的一项。</p>
            <button class="primary-button" @click="jumpToDemo">开始今日训练 <span>→</span></button>
          </div>
          <div class="focus-meter">
            <div class="meter-ring"><strong>1</strong><span>/ 4 类问题</span></div>
            <small>本轮训练重点</small>
          </div>
        </article>

        <article class="status-card">
          <div class="status-top"><span>本周状态</span><b>学习中</b></div>
          <div class="score-row"><div><small>这篇初稿的 Agent 参考评分</small><strong>3.0 / 5.0</strong></div><span>非提分承诺</span></div>
          <div class="status-progress"><i></i></div>
          <p>3.0 只描述当前这篇初稿。完成训练不代表自动达到 4.5；系统会根据新的真实作答重新评分并决定下一步。</p>
        </article>
      </section>

      <section class="quick-stats">
        <div><span>待验证错题</span><strong>3</strong><small>其中 1 项今日处理</small></div>
        <div><span>连续练习</span><strong>6 天</strong><small>本周已完成 4 次</small></div>
        <div><span>当前学习阶段</span><strong>同题定向修复</strong><small>通过后才进入陌生题迁移</small></div>
      </section>

      <section id="coach-demo" class="demo-section">
        <div class="section-heading">
          <div>
            <span class="section-kicker">YOUR ADAPTIVE TRAINING</span>
            <h2>今日训练路径</h2>
            <p>完成每一步后，AI 会读取新的表现并决定继续微训练、进入陌生题迁移，或在迁移通过后毕业。</p>
          </div>
          <button class="reset-button" @click="resetDemo">重置训练</button>
        </div>

        <div class="stage-track">
          <div class="track-line"><i :style="{ width: progress }"></i></div>
          <button
            v-for="(stage, index) in stages"
            :key="stage.label"
            :class="['stage-button', { active: activeStage === index, done: activeStage > index, locked: index > maxUnlockedStage }]"
            :disabled="index > maxUnlockedStage"
            @click="openStage(index)"
          >
            <span>{{ activeStage > index ? '✓' : index + 1 }}</span>
            <b>{{ stage.label }}</b>
            <small>{{ stage.hint }}</small>
          </button>
        </div>

        <div class="stage-panel">
          <transition name="stage-fade" mode="out-in">
            <div :key="activeStage">
              <div v-if="activeStage === 0" class="two-column">
                <article class="paper-card">
                  <div class="card-label">你的 Academic Discussion 作答</div>
                  <textarea v-model="draftText" class="draft-input" aria-label="学生作文"></textarea>
                  <div class="input-meta"><span>{{ draftText.trim().split(/\s+/).filter(Boolean).length }} words</span><span>可直接编辑后再诊断</span></div>
                </article>
                <article class="diagnosis-card">
                  <div class="card-label">诊断会结合什么</div>
                  <div class="diagnosis-inputs">
                    <p><b>本次表现</b><span>语言准确性、任务完成、内容展开</span></p>
                    <p><b>历史记录</b><span>同类错误是否反复出现</span></p>
                    <p><b>学习约束</b><span>距离考试 30 天，每次可练 10 分钟</span></p>
                  </div>
                  <div class="warning-box">点击后，系统不会把所有错误都丢给你，只生成当前最值得执行的一条训练路径。</div>
                </article>
              </div>

              <div v-else-if="activeStage === 1" class="decision-stage">
                <section class="diagnosis-map">
                  <div class="diagnosis-map-heading">
                    <div><span class="section-kicker">FULL DIAGNOSIS MAP</span><h3>先看全貌，再做教学取舍</h3></div>
                    <p>完整问题不会消失；系统把长篇反馈压缩成可查看的诊断地图，学生一次只执行一个任务。</p>
                  </div>
                  <div class="diagnosis-tabs" role="tablist" aria-label="作文诊断类别">
                    <button
                      v-for="item in diagnosisCategories"
                      :key="item.id"
                      :class="{ active: activeDiagnosisId === item.id }"
                      role="tab"
                      :aria-selected="activeDiagnosisId === item.id"
                      @click="activeDiagnosisId = item.id"
                    >
                      <span>{{ item.level }}</span><b>{{ item.short }}</b><small>{{ item.summary }}</small>
                      <i><em :style="{ width: item.signal + '%' }"></em></i>
                    </button>
                  </div>
                  <article class="diagnosis-detail">
                    <div class="diagnosis-detail-title"><span>当前查看</span><h4>{{ activeDiagnosis.title }}</h4><b>{{ activeDiagnosis.level }}</b></div>
                    <div class="evidence-list">
                      <div v-for="evidence in activeDiagnosis.evidence" :key="evidence.source">
                        <code>{{ evidence.source }}</code><p>{{ evidence.issue }}</p>
                      </div>
                    </div>
                    <p class="impact-note"><b>对学习路径的影响：</b>{{ activeDiagnosis.impact }}</p>
                  </article>
                </section>

                <div class="selection-formula">
                  <span>取舍依据</span><b>得分影响</b><i>×</i><b>出现频率</b><i>×</i><b>前置依赖</b><i>×</i><b>10 分钟可改善性</b>
                </div>
                <div class="compression-card">
                  <span class="muted-number">4 类</span><span class="compress-symbol">→</span><span class="strong-number">1</span>
                  <p>不是只发现一个问题，而是看完全部问题后，只布置一个当前任务</p>
                </div>
                <div class="priority-layout">
                  <article class="priority-main">
                    <div class="focus-title"><span>PRIORITY 01</span><h3>动词骨架稳定性</h3></div>
                    <p>它高频出现、直接破坏句子完整性，而且是后续复杂句式的前置能力。</p>
                    <ul>
                      <li><b>为什么现在练：</b>同一篇中反复出现，短期可通过针对练习降低频率</li>
                      <li><b>本轮成功标准：</b>4 个目标句中至少 3 个动词结构正确</li>
                      <li><b>暂时不追求：</b>词汇自然度和内容优化，避免同时增加认知负担</li>
                    </ul>
                  </article>
                  <article class="deferred-card">
                    <div class="card-label">NOT NOW · 暂缓</div>
                    <div><span>02</span><p><b>词汇自然度</b><small>先保证句子站得住</small></p></div>
                    <div><span>03</span><p><b>时态与一致</b><small>纳入下一轮语言训练</small></p></div>
                    <div><span>04</span><p><b>任务与论证</b><small>不是当前基础瓶颈</small></p></div>
                  </article>
                </div>
              </div>

              <div v-else-if="activeStage === 2" class="repair-stage">
                <div class="task-heading"><span class="section-kicker">MICRO PRACTICE</span><h3>先证明你理解了规则，再回到作文</h3><p>选择每个句子的正确动词结构。系统会根据正确率决定下一步。</p></div>
                <div class="time-plan"><span><b>3 min</b>规则辨析</span><i></i><span><b>4 min</b>微型练习</span><i></i><span><b>3 min</b>原句修复</span><em>共 10 分钟</em></div>
                <div class="quiz-list">
                  <article v-for="(question, questionIndex) in quizQuestions" :key="question.stem" class="quiz-card">
                    <div class="quiz-number">0{{ questionIndex + 1 }}</div>
                    <div class="quiz-content">
                      <p>{{ question.stem }}</p>
                      <div class="quiz-options">
                        <button
                          v-for="(option, optionIndex) in question.options"
                          :key="option"
                          :class="['quiz-option', {
                            selected: answers[questionIndex] === optionIndex,
                            correct: quizSubmitted && optionIndex === question.correct,
                            wrong: quizSubmitted && answers[questionIndex] === optionIndex && optionIndex !== question.correct
                          }]"
                          :disabled="quizSubmitted"
                          @click="answers[questionIndex] = optionIndex"
                        >{{ option }}</button>
                      </div>
                      <p v-if="quizSubmitted" class="rule-feedback">{{ question.rule }}</p>
                    </div>
                  </article>
                </div>
                <div v-if="quizSubmitted" :class="['quiz-result', { passed: quizScore === 3 }]">
                  <strong>{{ quizScore }}/3</strong>
                  <p v-if="quizScore === 3"><b>规则识别通过。</b>下一步不是继续选择题，而是回到自己的表达中自主改写。</p>
                  <p v-else><b>暂未通过。</b>系统将保留本知识点，并在改写后决定是否需要追加基础练习。</p>
                </div>
              </div>

              <div v-else-if="activeStage === 3" class="memory-stage">
                <div class="task-heading">
                  <span class="section-kicker">TARGETED REWRITE</span>
                  <h3>现在，自己修复原作文里的两个目标句</h3>
                  <p>必须保留原意，并正确使用 <b>used to do</b> 和 <b>wanted to stay</b>。这里不会提前给出完整答案。</p>
                </div>
                <div class="rewrite-layout">
                  <article class="source-sentences">
                    <span>需要修复</span>
                    <p>I was used to consider myself a high-energy person.</p>
                    <p>All I want to do was staying at home alone.</p>
                  </article>
                  <article class="rewrite-box">
                    <label for="rewrite-answer">你的改写</label>
                    <textarea id="rewrite-answer" v-model="rewriteText" placeholder="请在这里写出两个完整句子……"></textarea>
                    <div v-if="rewriteChecked" :class="['rewrite-feedback', { passed: rewritePassed }]">
                      <template v-if="rewritePassed">✓ 两个目标结构均已检出。错题卡已进入“同题已修复”状态。</template>
                      <template v-else>尚未同时检出正确的 “used to consider” 和 “wanted to … stay” 结构。修改后可以再次检查。</template>
                    </div>
                  </article>
                </div>
              </div>

              <div v-else class="replan-stage">
                <div class="outcome-summary">
                  <span class="section-kicker">LIVE DECISION RESULT</span>
                  <h3>{{ quizScore === 3 && rewritePassed ? '本轮修复通过，进入新题迁移' : '本轮尚未稳定，返回针对训练' }}</h3>
                  <p>这是根据你刚才的真实作答结果生成的路径，不是预先播放的固定结论。</p>
                </div>
                <div class="route-after">
                  <article :class="{ 'route-active': !(quizScore === 3 && rewritePassed) }"><span>结果 A · CONTINUE</span><b>继续微训练</b><p>{{ quizScore }}/3 道规则识别正确；未稳定时回到更小练习</p></article>
                  <article :class="{ 'route-active': quizScore === 3 && rewritePassed }"><span>结果 B · TRANSFER</span><b>陌生题迁移验证</b><p>{{ quizScore === 3 && rewritePassed ? '本次修复通过，已解锁' : '同题修复通过后解锁' }}</p></article>
                  <article class="route-locked"><span>结果 C · GRADUATE</span><b>本能力毕业</b><p>只有陌生题也稳定正确，才会标记为已掌握</p></article>
                </div>

                <button :class="['mistake-card', { saved: cardSaved }]" @click="cardSaved = !cardSaved">
                  <div class="mistake-top"><span>智能错题卡 · 动词结构</span><b>{{ cardSaved ? '✓ 已存入学习记忆' : '+ 确认并存档' }}</b></div>
                  <div class="memory-grid">
                    <p><small>规则识别</small>{{ quizScore }}/3 正确</p>
                    <p><small>自主改写</small>{{ rewritePassed ? '已通过' : '需继续' }}</p>
                    <p><small>当前状态</small><em>{{ quizScore === 3 && rewritePassed ? '同题已修复 · 迁移待验证' : '训练中 · 尚未毕业' }}</em></p>
                  </div>
                </button>
              </div>
            </div>
          </transition>

          <div class="panel-footer">
            <span>Student A · Academic Discussion · 真实匿名记录</span>
            <button v-if="activeStage === 0" class="primary-button" :disabled="draftText.trim().length < 80" @click="next">分析这篇作文 <span>→</span></button>
            <button v-else-if="activeStage === 1" class="primary-button" @click="next">接受重点并开始训练 <span>→</span></button>
            <button v-else-if="activeStage === 2 && !quizSubmitted" class="primary-button" :disabled="!quizComplete" @click="submitQuiz">提交答案</button>
            <button v-else-if="activeStage === 2" class="primary-button" @click="next">进入自主改写 <span>→</span></button>
            <button v-else-if="activeStage === 3 && !rewriteChecked" class="primary-button" :disabled="rewriteText.trim().length < 20" @click="checkRewrite">检查我的改写</button>
            <button v-else-if="activeStage === 3" class="primary-button" @click="next">根据结果重新规划 <span>→</span></button>
            <button v-else class="primary-button" @click="resetDemo">重新训练 ↻</button>
          </div>
        </div>
      </section>

      <section class="teacher-proof">
        <div><span>10 YEARS OF TEACHING</span><h2>不是让模型替老师做决定，<br>而是把老师判断前的“初筛”做出来。</h2></div>
        <p>优先级综合考虑：错误频率、对得分的影响、前置依赖、短期可改善程度，以及学生当前能否承受。AI 给出候选路径，教师经验定义什么值得优先。</p>
      </section>
    </main>
  </div>
</template>

<style scoped>
.coach-page { min-height: 100vh; background: #07110f; color: #effbf6; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; display: grid; grid-template-columns: 230px minmax(0, 1fr); }
button { font-family: inherit; }
.product-sidebar { height: 100vh; position: sticky; top: 0; padding: 26px 18px 20px; border-right: 1px solid rgba(199,255,230,.1); background: #091512; display: flex; flex-direction: column; z-index: 30; }
.brand { color: #f6fff9; background: none; border: 0; font-size: 22px; font-weight: 900; letter-spacing: -.04em; cursor: pointer; text-align: left; padding: 4px 10px 28px; }.brand span { margin-left: 7px; color: #5ce4aa; font-size: 9px; letter-spacing: .08em; vertical-align: top; }
.side-nav { display: flex; flex-direction: column; gap: 7px; }.side-link { width: 100%; border: 0; background: transparent; color: #789087; display: grid; grid-template-columns: 26px 1fr auto; align-items: center; text-align: left; padding: 12px 13px; border-radius: 10px; cursor: pointer; }.side-link i { font-style: normal; font-size: 16px; }.side-link span { font-size: 13px; font-weight: 700; }.side-link b { background: #223b32; color: #75e8b8; padding: 2px 7px; border-radius: 99px; font-size: 10px; }.side-link:hover, .side-link.active { color: #eafff5; background: #12241e; }.side-link.active { box-shadow: inset 3px 0 #5ce4aa; }
.student-profile { margin-top: auto; display: flex; align-items: center; gap: 10px; padding: 15px 10px 4px; border-top: 1px solid rgba(255,255,255,.08); }.avatar { width: 34px; height: 34px; display: grid; place-items: center; border-radius: 50%; background: #bbf5dc; color: #0a2b1e; font-weight: 900; }.student-profile p { margin: 0; display: flex; flex-direction: column; gap: 3px; }.student-profile strong { font-size: 12px; }.student-profile span { color: #63786f; font-size: 10px; }
.product-main { min-width: 0; padding: 0 clamp(22px, 4vw, 60px) 70px; }
.workspace-header { min-height: 94px; display: flex; align-items: center; justify-content: space-between; gap: 25px; border-bottom: 1px solid rgba(255,255,255,.08); }.workspace-header > div:first-child > span { color: #637a70; font-size: 10px; font-weight: 800; letter-spacing: .14em; }.workspace-header h1 { margin: 5px 0 0; font-size: 25px; letter-spacing: -.03em; }
.nav-actions { display: flex; align-items: center; gap: 14px; }
.case-switch { display: flex; padding: 3px; border: 1px solid #294138; border-radius: 9px; background: #091511; }
.case-switch button { border: 0; border-radius: 6px; padding: 7px 10px; background: transparent; color: #657b72; font-size: 10px; font-weight: 800; cursor: pointer; }
.case-switch button.active { background: #173229; color: #75e8b8; }
.roadshow-badge { font-size: 11px; font-weight: 800; color: #9be7c8; letter-spacing: .12em; display: flex; align-items: center; gap: 7px; }
.roadshow-badge i { width: 7px; height: 7px; border-radius: 50%; background: #48e6a4; box-shadow: 0 0 0 5px rgba(72,230,164,.12); }
.ghost-button, .reset-button { color: #d6e7df; background: transparent; border: 1px solid rgba(218,255,238,.18); padding: 9px 14px; border-radius: 9px; cursor: pointer; }
.today-grid { max-width: 1240px; margin: 32px auto 16px; display: grid; grid-template-columns: minmax(0, 1.65fr) minmax(280px, .75fr); gap: 16px; }.today-focus, .status-card { border: 1px solid rgba(199,255,230,.13); border-radius: 20px; background: #0d1b17; }.today-focus { min-height: 300px; padding: clamp(26px, 4vw, 44px); display: grid; grid-template-columns: 1fr 175px; align-items: center; gap: 30px; background: radial-gradient(circle at 85% 45%, rgba(63,225,155,.15), transparent 32%), #0d1b17; }.focus-copy h2 { font-size: clamp(29px, 3.3vw, 43px); letter-spacing: -.045em; line-height: 1.12; margin: 13px 0 14px; }.focus-copy h2 em { color: #6ee9b6; font-style: normal; }.focus-copy p { max-width: 630px; color: #91a69d; line-height: 1.7; margin-bottom: 23px; }.focus-meter { display: flex; flex-direction: column; align-items: center; gap: 12px; }.meter-ring { width: 145px; height: 145px; border-radius: 50%; display: grid; place-content: center; text-align: center; border: 8px solid #19332a; border-top-color: #61e5ad; box-shadow: 0 0 35px rgba(68,225,160,.12); }.meter-ring strong { font-size: 45px; line-height: 1; }.meter-ring span { color: #688077; font-size: 12px; }.focus-meter small { color: #698078; }.status-card { padding: 26px; display: flex; flex-direction: column; }.status-top { display: flex; justify-content: space-between; color: #849a91; font-size: 12px; }.status-top b { color: #69e6b2; background: rgba(72,225,159,.08); border-radius: 99px; padding: 4px 8px; }.score-row { margin-top: auto; display: flex; justify-content: space-between; align-items: end; }.score-row div { display: flex; flex-direction: column; gap: 7px; }.score-row small { color: #62786f; }.score-row strong { font-size: 30px; }.score-row > span { color: #6de4b2; font-size: 12px; }.status-progress { height: 6px; background: #1a2d27; border-radius: 99px; margin: 18px 0; overflow: hidden; }.status-progress i { display: block; width: 72%; height: 100%; background: #5de0a7; }.status-card p { color: #70877d; font-size: 12px; line-height: 1.6; margin: 0; }
.quick-stats { max-width: 1240px; margin: 0 auto 30px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }.quick-stats > div { padding: 20px 22px; border: 1px solid rgba(255,255,255,.08); border-radius: 14px; background: rgba(255,255,255,.02); display: grid; grid-template-columns: 1fr auto; align-items: center; }.quick-stats span { color: #6c8178; font-size: 11px; }.quick-stats strong { font-size: 18px; }.quick-stats small { grid-column: 1 / -1; color: #50665c; margin-top: 7px; }
.hero-section { max-width: 1240px; min-height: 610px; margin: auto; padding: 80px 36px 64px; display: grid; grid-template-columns: 1.25fr .75fr; align-items: center; gap: 70px; }
.eyebrow, .section-kicker, .card-label { font-size: 11px; font-weight: 850; letter-spacing: .15em; color: #67e8b2; }
.hero-copy h1 { font-size: clamp(44px, 5.4vw, 78px); line-height: 1.03; letter-spacing: -.055em; margin: 20px 0 24px; max-width: 820px; }
.hero-copy h1 em { color: #78efbd; font-style: normal; }
.hero-copy > p { max-width: 690px; color: #acc2b9; font-size: 18px; line-height: 1.75; }
.hero-actions { margin-top: 34px; display: flex; align-items: center; gap: 18px; flex-wrap: wrap; }
.primary-button { border: 0; background: #69e9b2; color: #052117; border-radius: 10px; padding: 13px 18px; font-weight: 850; cursor: pointer; box-shadow: 0 10px 32px rgba(36,211,137,.15); }
.primary-button:disabled { opacity: .38; cursor: not-allowed; box-shadow: none; }
.primary-button span { padding-left: 18px; }
.case-note { color: #728b81; font-size: 12px; }
.decision-visual { border: 1px solid rgba(129,240,191,.2); border-radius: 28px; padding: 25px; background: radial-gradient(circle at 50% 80%, rgba(37,220,142,.16), transparent 42%), rgba(255,255,255,.025); min-height: 460px; display: flex; flex-direction: column; align-items: center; justify-content: center; box-shadow: inset 0 1px rgba(255,255,255,.07), 0 30px 90px rgba(0,0,0,.25); }
.visual-label { align-self: flex-start; font-size: 11px; color: #779087; letter-spacing: .13em; }
.noise-cloud { display: flex; justify-content: center; flex-wrap: wrap; gap: 9px; max-width: 360px; margin: 35px 0 15px; }
.noise-cloud span { padding: 7px 11px; border: 1px solid rgba(255,255,255,.1); color: #81958d; border-radius: 99px; font-size: 12px; }
.decision-arrow { color: #52d99e; font-size: 24px; margin: 5px 0 12px; }
.focus-orb { width: 210px; height: 210px; border: 1px solid #5fe4aa; border-radius: 50%; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; background: radial-gradient(circle, rgba(59,228,155,.25), rgba(7,17,15,.6) 66%); box-shadow: 0 0 60px rgba(44,220,145,.16); }
.focus-orb small { color: #8af0c5; letter-spacing: .14em; font-weight: 850; }
.focus-orb strong { font-size: 29px; line-height: 1.12; margin: 10px 0; }
.focus-orb b { color: #8da49a; font-size: 12px; }
.proof-strip { border-top: 1px solid rgba(255,255,255,.08); border-bottom: 1px solid rgba(255,255,255,.08); display: flex; align-items: center; justify-content: center; gap: 24px; padding: 24px 5vw; background: #0b1714; flex-wrap: wrap; }
.proof-strip > div { display: flex; flex-direction: column; }
.proof-strip strong { color: #f8fffb; font-size: 24px; }.proof-strip span { color: #789087; font-size: 11px; margin-top: 3px; }.proof-strip .strip-arrow { color: #55e3a5; font-size: 20px; }.strip-divider { width: 1px; height: 38px; background: rgba(255,255,255,.12); }.proof-strip p { max-width: 330px; color: #657b72; font-size: 10px; line-height: 1.5; }
.demo-section { max-width: 1240px; margin: auto; padding: 42px 0 70px; scroll-margin-top: 20px; }
.section-heading { display: flex; align-items: end; justify-content: space-between; gap: 30px; margin-bottom: 45px; }.section-heading h2 { font-size: clamp(28px, 4vw, 46px); letter-spacing: -.04em; margin: 12px 0 0; max-width: 780px; }
.section-heading p { color: #70867d; margin: 10px 0 0; line-height: 1.6; }
.stage-track { position: relative; display: grid; grid-template-columns: repeat(5, 1fr); gap: 10px; margin-bottom: 22px; }.track-line { position: absolute; top: 20px; left: 7%; right: 7%; height: 2px; background: #1d302a; }.track-line i { display: block; height: 100%; background: #55e3a5; transition: width .4s ease; }
.stage-button { position: relative; z-index: 1; background: transparent; border: 0; color: #647a71; display: flex; flex-direction: column; align-items: center; cursor: pointer; }.stage-button > span { width: 40px; height: 40px; display: grid; place-items: center; border-radius: 50%; background: #0d1c18; border: 1px solid #21372f; font-weight: 800; transition: .25s; }.stage-button b { margin-top: 10px; color: #7c9188; font-size: 13px; }.stage-button small { margin-top: 4px; }.stage-button.active > span, .stage-button.done > span { background: #57e0a5; color: #062117; border-color: #57e0a5; box-shadow: 0 0 25px rgba(68,221,157,.2); }.stage-button.active b { color: #effbf6; }
.stage-button.locked { cursor: not-allowed; opacity: .42; }
.stage-panel { min-height: 530px; border: 1px solid rgba(198,255,229,.13); background: #0c1815; border-radius: 24px; padding: clamp(24px, 4vw, 48px); box-shadow: 0 30px 100px rgba(0,0,0,.25); display: flex; flex-direction: column; justify-content: space-between; }
.two-column, .priority-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }.paper-card, .diagnosis-card, .priority-main, .deferred-card, .mistake-card { border: 1px solid rgba(255,255,255,.1); background: rgba(255,255,255,.025); border-radius: 18px; padding: 28px; }.paper-card p { font-family: Georgia, serif; font-size: 19px; line-height: 1.8; color: #d7e3de; }.paper-card mark, .repair-list mark { background: rgba(255,105,105,.16); color: #ffaaa3; padding: 1px 3px; }.paper-footer { display: flex; gap: 8px; flex-wrap: wrap; }.paper-footer span { color: #73dcb0; background: rgba(65,213,151,.08); padding: 6px 10px; border-radius: 99px; font-size: 11px; }.issue-count { display: flex; align-items: baseline; gap: 10px; margin: 22px 0; }.issue-count strong { font-size: 64px; color: #ffad91; line-height: 1; }.issue-count span { color: #8da198; }.issue-chips { display: flex; flex-wrap: wrap; gap: 8px; }.issue-chips span { border: 1px solid #344840; padding: 7px 10px; border-radius: 7px; color: #a9bcb4; font-size: 12px; }.warning-box { margin-top: 28px; padding: 16px; border-left: 3px solid #ffb18f; background: rgba(255,148,109,.07); color: #e4b8a8; line-height: 1.6; font-size: 13px; }
.draft-input { width: 100%; min-height: 275px; resize: vertical; margin-top: 18px; padding: 18px; border: 1px solid #294139; border-radius: 12px; outline: none; background: #08130f; color: #dceae4; font: 15px/1.7 Georgia, serif; }.draft-input:focus { border-color: #59dfa7; box-shadow: 0 0 0 3px rgba(74,222,158,.08); }.input-meta { display: flex; justify-content: space-between; gap: 15px; margin-top: 10px; color: #61776e; font-size: 10px; }.diagnosis-inputs { margin-top: 18px; display: flex; flex-direction: column; gap: 12px; }.diagnosis-inputs p { margin: 0; padding: 15px; border: 1px solid rgba(255,255,255,.07); border-radius: 10px; display: flex; flex-direction: column; gap: 5px; }.diagnosis-inputs b { color: #d8e9e1; }.diagnosis-inputs span { color: #71877e; font-size: 12px; }
.diagnosis-map { margin-bottom: 28px; padding: 24px; border: 1px solid rgba(255,255,255,.09); border-radius: 18px; background: rgba(255,255,255,.018); }.diagnosis-map-heading { display: flex; justify-content: space-between; gap: 30px; align-items: end; margin-bottom: 18px; }.diagnosis-map-heading h3 { margin: 7px 0 0; font-size: 25px; }.diagnosis-map-heading p { max-width: 510px; margin: 0; color: #71877e; font-size: 12px; line-height: 1.6; }.diagnosis-tabs { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }.diagnosis-tabs button { min-width: 0; padding: 15px; text-align: left; color: inherit; border: 1px solid #21382f; border-radius: 12px; background: #091511; cursor: pointer; transition: .2s ease; }.diagnosis-tabs button:hover, .diagnosis-tabs button.active { transform: translateY(-2px); border-color: #56dfa6; background: rgba(69,220,155,.07); }.diagnosis-tabs span { color: #eeaa90; font-size: 9px; font-weight: 850; letter-spacing: .06em; }.diagnosis-tabs b { display: block; margin: 6px 0; color: #dceae4; font-size: 14px; }.diagnosis-tabs small { display: block; min-height: 48px; color: #687e75; line-height: 1.45; }.diagnosis-tabs i { display: block; height: 4px; margin-top: 12px; border-radius: 99px; overflow: hidden; background: #1a2c25; }.diagnosis-tabs em { display: block; height: 100%; background: linear-gradient(90deg, #55dfa5, #f2b17f); }.diagnosis-detail { margin-top: 12px; padding: 18px; border-radius: 13px; background: #07120f; }.diagnosis-detail-title { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }.diagnosis-detail-title span { color: #60776d; font-size: 9px; letter-spacing: .1em; }.diagnosis-detail-title h4 { margin: 0; color: #e4f2ec; font-size: 17px; }.diagnosis-detail-title b { margin-left: auto; padding: 5px 8px; color: #ffb49d; border-radius: 99px; background: rgba(255,137,113,.08); font-size: 10px; }.evidence-list { display: grid; grid-template-columns: repeat(3, 1fr); gap: 9px; margin-top: 14px; }.evidence-list > div { min-width: 0; padding: 12px; border: 1px solid rgba(255,255,255,.07); border-radius: 9px; }.evidence-list code { display: block; overflow-wrap: anywhere; color: #f0b4aa; font: 12px/1.5 Georgia, serif; }.evidence-list p { margin: 7px 0 0; color: #71877e; font-size: 10px; line-height: 1.45; }.impact-note { margin: 13px 0 0; color: #82988f; font-size: 11px; line-height: 1.55; }.impact-note b { color: #cfe2d9; }.selection-formula { margin: 0 auto 18px; display: flex; align-items: center; justify-content: center; gap: 9px; flex-wrap: wrap; color: #60766d; font-size: 10px; }.selection-formula > span { padding: 6px 9px; border-radius: 99px; color: #6de5b3; background: rgba(82,222,161,.08); font-weight: 850; }.selection-formula b { color: #9cafA6; font-weight: 700; }.selection-formula i { color: #40564d; font-style: normal; }
.compression-card { display: flex; justify-content: center; align-items: center; gap: 25px; margin: 4px auto 28px; flex-wrap: wrap; }.compression-card .muted-number { font-size: 66px; color: #51645d; font-weight: 850; }.compression-card .strong-number { font-size: 82px; color: #69e9b2; font-weight: 900; }.compress-symbol { font-size: 38px; color: #6e857b; }.compression-card p { flex-basis: 100%; text-align: center; color: #7d948a; margin: -12px 0 0; }.priority-main { border-color: rgba(78,225,162,.35); background: linear-gradient(135deg, rgba(59,218,151,.1), rgba(255,255,255,.02)); }.focus-title span { color: #62e3aa; font-size: 11px; letter-spacing: .12em; }.focus-title h3 { margin: 8px 0 14px; font-size: 30px; }.priority-main > p, .priority-main li { color: #a8bcb3; line-height: 1.65; }.priority-main ul { padding-left: 20px; }.priority-main li { margin: 8px 0; }.priority-main li b { color: #dff5eb; }.deferred-card > div:not(.card-label) { display: flex; gap: 16px; align-items: center; border-bottom: 1px solid rgba(255,255,255,.07); padding: 16px 0; }.deferred-card div > span { color: #4f665d; font-weight: 850; }.deferred-card p { margin: 0; display: flex; flex-direction: column; gap: 4px; }.deferred-card small { color: #60776e; }
.score-rise { display: flex; align-items: center; justify-content: center; gap: 18px; flex-wrap: wrap; margin-bottom: 28px; }.score-rise span, .score-rise b { color: #789087; font-size: 12px; }.score-rise strong { font-size: 48px; }.score-rise i { color: #54e0a5; font-size: 30px; }.repair-list { display: grid; grid-template-columns: 100px 1fr; border: 1px solid rgba(255,255,255,.09); border-radius: 16px; overflow: hidden; }.repair-list > div { display: contents; }.repair-list span, .repair-list p { padding: 15px 18px; margin: 0; border-bottom: 1px solid rgba(255,255,255,.07); }.repair-list span { color: #657a72; font-size: 10px; letter-spacing: .1em; background: rgba(255,255,255,.02); }.repair-list p { color: #c7d5cf; }.repair-list strong { color: #6ee7b3; }.coach-observation { margin-top: 24px; padding: 17px 20px; background: rgba(255,194,105,.07); border: 1px solid rgba(255,194,105,.15); border-radius: 12px; display: flex; gap: 18px; }.coach-observation b { color: #ffc778; white-space: nowrap; }.coach-observation p { margin: 0; color: #b9c9c2; line-height: 1.6; }
.task-heading { text-align: center; max-width: 720px; margin: 0 auto 26px; }.task-heading h3, .outcome-summary h3 { font-size: 28px; margin: 9px 0; }.task-heading p, .outcome-summary p { color: #758c82; line-height: 1.6; margin: 0; }.quiz-list { display: grid; gap: 12px; }.quiz-card { padding: 18px; border: 1px solid rgba(255,255,255,.09); border-radius: 13px; background: rgba(255,255,255,.018); display: grid; grid-template-columns: 42px 1fr; gap: 12px; }.quiz-number { color: #557068; font-size: 11px; font-weight: 850; padding-top: 3px; }.quiz-content > p:first-child { margin: 0 0 12px; color: #d8e6e0; font-family: Georgia, serif; font-size: 16px; }.quiz-options { display: flex; gap: 8px; flex-wrap: wrap; }.quiz-option { border: 1px solid #2a4138; background: #0a1612; color: #8fa59b; border-radius: 8px; padding: 8px 12px; cursor: pointer; }.quiz-option:hover:not(:disabled), .quiz-option.selected { border-color: #5bdca6; color: #ddf8eb; }.quiz-option.correct { border-color: #58dda5; background: rgba(67,220,154,.12); color: #76e9ba; }.quiz-option.wrong { border-color: #f18e83; background: rgba(241,105,93,.09); color: #ffaaa1; }.rule-feedback { color: #789087; font-size: 11px; margin: 10px 0 0; }.quiz-result { margin-top: 18px; border: 1px solid rgba(255,162,130,.25); background: rgba(255,139,100,.06); border-radius: 12px; padding: 16px; display: flex; align-items: center; gap: 18px; }.quiz-result.passed { border-color: rgba(85,224,165,.3); background: rgba(69,220,155,.07); }.quiz-result strong { font-size: 28px; }.quiz-result p { margin: 0; color: #9db0a8; line-height: 1.55; }.quiz-result b { color: #e9f8f1; }
.time-plan { max-width: 680px; margin: -8px auto 20px; display: flex; align-items: center; justify-content: center; gap: 12px; color: #748a81; font-size: 11px; }.time-plan span { display: flex; gap: 6px; align-items: center; }.time-plan b { color: #70e5b4; }.time-plan i { width: 28px; height: 1px; background: #294138; }.time-plan em { margin-left: 8px; padding: 5px 9px; border-radius: 99px; background: rgba(83,224,164,.08); color: #83d9b7; font-style: normal; }
.memory-intro { text-align: center; max-width: 690px; margin: 0 auto 28px; }.memory-intro h3 { font-size: 30px; margin: 10px 0; }.memory-intro p { color: #849b91; line-height: 1.65; }.mistake-card { width: 100%; color: inherit; text-align: left; cursor: pointer; transition: .25s; }.mistake-card:hover, .mistake-card.saved { border-color: #55dfa5; transform: translateY(-2px); }.mistake-top { display: flex; justify-content: space-between; gap: 20px; }.mistake-top > span { color: #7f948b; }.mistake-top b { color: #69e9b2; }.mistake-example { margin: 24px 0; display: flex; gap: 18px; align-items: center; justify-content: center; font-size: 17px; flex-wrap: wrap; }.mistake-example del { color: #df9189; }.mistake-example strong { color: #74e7b6; }.memory-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }.memory-grid p { background: #0a1512; padding: 14px; border-radius: 10px; margin: 0; color: #c0d0c9; line-height: 1.5; }.memory-grid small { display: block; color: #61766d; margin-bottom: 7px; }.memory-grid em { color: #ffc87d; font-style: normal; }
.rewrite-layout { display: grid; grid-template-columns: .85fr 1.15fr; gap: 18px; }.source-sentences, .rewrite-box { border: 1px solid rgba(255,255,255,.09); border-radius: 14px; padding: 20px; background: rgba(255,255,255,.02); }.source-sentences > span, .rewrite-box label { color: #677e74; font-size: 10px; font-weight: 800; letter-spacing: .1em; }.source-sentences p { color: #e1aaa4; font-family: Georgia, serif; line-height: 1.6; }.rewrite-box { display: flex; flex-direction: column; }.rewrite-box textarea { flex: 1; min-height: 170px; resize: vertical; margin-top: 12px; padding: 15px; border: 1px solid #294139; border-radius: 10px; background: #08130f; color: #e4f0eb; outline: none; line-height: 1.6; }.rewrite-box textarea:focus { border-color: #5bdca6; }.rewrite-feedback { margin-top: 10px; color: #f0a59b; font-size: 12px; line-height: 1.5; }.rewrite-feedback.passed { color: #6ee7b3; }.outcome-summary { text-align: center; margin-bottom: 26px; }
.route-before { display: flex; align-items: center; justify-content: center; gap: 14px; color: #637970; text-decoration: line-through; }.route-before span { font-size: 11px; letter-spacing: .12em; }.replan-pulse { width: max-content; margin: 25px auto; padding: 9px 15px; border: 1px solid rgba(84,224,165,.32); background: rgba(84,224,165,.08); color: #6fe9b6; border-radius: 99px; font-size: 12px; font-weight: 850; box-shadow: 0 0 35px rgba(56,222,151,.12); }.route-after { display: grid; grid-template-columns: 1fr auto 1fr auto 1fr; align-items: center; gap: 12px; }.route-after article { min-height: 145px; border: 1px solid rgba(255,255,255,.1); padding: 20px; border-radius: 15px; display: flex; flex-direction: column; }.route-after article > span { font-size: 10px; color: #637970; letter-spacing: .1em; }.route-after article b { font-size: 20px; margin: 15px 0 8px; }.route-after article p { color: #788f85; line-height: 1.5; margin: 0; }.route-after .route-active { border-color: #58dfaa; background: rgba(65,219,153,.08); }.route-after i { color: #50d89f; }.route-result { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-top: 28px; }.route-result > div { padding: 15px; background: rgba(255,255,255,.025); border-radius: 10px; display: flex; justify-content: space-between; }.route-result small { color: #6e837a; }.route-result strong { color: #c9ddd4; }
.route-after .route-locked { opacity: .48; border-style: dashed; }
.panel-footer { margin-top: 36px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,.08); display: flex; justify-content: space-between; align-items: center; gap: 20px; }.panel-footer > span { color: #61766e; font-size: 11px; }.teacher-proof { max-width: 1240px; margin: 0 auto; padding: 55px; border-radius: 24px; color: #07120e; background: #baf7dc; display: grid; grid-template-columns: 1.1fr .9fr; align-items: end; gap: 50px; }.teacher-proof span { color: #18734f; font-weight: 850; font-size: 11px; letter-spacing: .14em; }.teacher-proof h2 { font-size: 33px; line-height: 1.25; letter-spacing: -.035em; margin: 14px 0 0; }.teacher-proof p { color: #356550; line-height: 1.7; margin: 0; }.stage-fade-enter-active, .stage-fade-leave-active { transition: opacity .16s ease, transform .16s ease; }.stage-fade-enter-from { opacity: 0; transform: translateY(8px); }.stage-fade-leave-to { opacity: 0; transform: translateY(-5px); }
@media (max-width: 850px) {
  .coach-page { grid-template-columns: 76px minmax(0, 1fr); }.product-sidebar { padding: 22px 10px; }.brand { font-size: 18px; padding-left: 6px; }.brand span, .side-link span, .side-link b, .student-profile p { display: none; }.side-link { grid-template-columns: 1fr; text-align: center; }.student-profile { justify-content: center; }.today-grid { grid-template-columns: 1fr; }.today-focus { grid-template-columns: 1fr; }.focus-meter { display: none; }.quick-stats { grid-template-columns: 1fr; }.hero-section { grid-template-columns: 1fr; padding-top: 60px; }.decision-visual { min-height: 390px; }.two-column, .priority-layout, .teacher-proof, .rewrite-layout { grid-template-columns: 1fr; }.diagnosis-map-heading { align-items: start; flex-direction: column; }.diagnosis-tabs { grid-template-columns: 1fr 1fr; }.evidence-list { grid-template-columns: 1fr; }.memory-grid { grid-template-columns: 1fr; }.route-after { grid-template-columns: 1fr; }.route-after > i { transform: rotate(90deg); text-align: center; }.stage-track { overflow-x: auto; grid-template-columns: repeat(5, 110px); justify-content: start; }.track-line { display: none; }.teacher-proof { padding: 30px; }
}
@media (max-width: 560px) {
  .coach-page { display: block; }.product-sidebar { display: none; }.product-main { padding: 0 15px 45px; }.workspace-header { min-height: 80px; }.workspace-header h1 { font-size: 20px; }.roadshow-badge { display: none; }.today-focus { padding: 24px 20px; }.quick-stats { display: none; }.hero-section, .demo-section { padding-left: 0; padding-right: 0; }.hero-copy h1 { font-size: 39px; }.stage-panel { padding: 18px; }.diagnosis-map { padding: 16px; }.diagnosis-tabs { grid-template-columns: 1fr; }.repair-list { grid-template-columns: 70px 1fr; }.panel-footer { align-items: stretch; flex-direction: column; }.section-heading { align-items: start; flex-direction: column; }.proof-strip { justify-content: flex-start; }.strip-divider { display: none; }.coach-observation { flex-direction: column; gap: 7px; }
}
</style>
