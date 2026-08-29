<script setup>
import { computed, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const activeStage = ref(0);
const cardSaved = ref(false);

const stages = [
  { label: "原始表现", hint: "12+ 个问题" },
  { label: "教学取舍", hint: "只抓 1 个" },
  { label: "同题修复", hint: "3.0 → 4.5" },
  { label: "错题记忆", hint: "沉淀方法" },
  { label: "迁移验证", hint: "动态重规划" },
];

const progress = computed(() => `${(activeStage.value / (stages.length - 1)) * 100}%`);

const next = () => {
  if (activeStage.value < stages.length - 1) activeStage.value += 1;
};

const jumpToDemo = () => {
  document.querySelector("#coach-demo")?.scrollIntoView({ behavior: "smooth" });
};
</script>

<template>
  <div class="coach-page">
    <aside class="product-sidebar">
      <button class="brand" @click="router.push('/')">TWI<span>beta</span></button>
      <nav class="side-nav">
        <button class="side-link" @click="router.push('/practice')"><i>✎</i><span>写作练习</span></button>
        <button class="side-link active"><i>◎</i><span>AI 学习教练</span></button>
        <button class="side-link" @click="router.push('/records')"><i>▤</i><span>我的记录</span></button>
        <button class="side-link"><i>◇</i><span>智能错题本</span><b>3</b></button>
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
          <span class="roadshow-badge"><i></i> 真实匿名案例</span>
          <button class="ghost-button" @click="router.push('/practice')">退出演示</button>
        </div>
      </header>

      <section class="today-grid">
        <article class="today-focus">
          <div class="focus-copy">
            <span class="section-kicker">TODAY'S FOCUS · 10 MIN</span>
            <h2>今天只练一件事：<em>动词骨架稳定性</em></h2>
            <p>你上次作文中出现了 12+ 处问题。AI 根据得分影响、出现频率和前置依赖，暂时放下其他问题，先帮你攻克这一项。</p>
            <button class="primary-button" @click="jumpToDemo">开始今日训练 <span>→</span></button>
          </div>
          <div class="focus-meter">
            <div class="meter-ring"><strong>1</strong><span>/ 12+</span></div>
            <small>本轮训练重点</small>
          </div>
        </article>

        <article class="status-card">
          <div class="status-top"><span>本周状态</span><b>学习中</b></div>
          <div class="score-row"><div><small>Agent 预估</small><strong>3.0 → 4.5</strong></div><span>↑ 1.5</span></div>
          <div class="status-progress"><i></i></div>
          <p>同题修复完成，下一步需要用陌生话题验证是否真正掌握。</p>
        </article>
      </section>

      <section class="quick-stats">
        <div><span>待验证错题</span><strong>3</strong><small>其中 1 项今日处理</small></div>
        <div><span>连续练习</span><strong>6 天</strong><small>本周已完成 4 次</small></div>
        <div><span>当前学习阶段</span><strong>迁移验证</strong><small>不是重复刷整篇作文</small></div>
      </section>

      <section id="coach-demo" class="demo-section">
        <div class="section-heading">
          <div>
            <span class="section-kicker">YOUR ADAPTIVE TRAINING</span>
            <h2>今日训练路径</h2>
            <p>完成每一步后，AI 会读取新的表现并决定继续、毕业，还是返回微训练。</p>
          </div>
          <button class="reset-button" @click="activeStage = 0; cardSaved = false">重新演示</button>
        </div>

        <div class="stage-track">
          <div class="track-line"><i :style="{ width: progress }"></i></div>
          <button
            v-for="(stage, index) in stages"
            :key="stage.label"
            :class="['stage-button', { active: activeStage === index, done: activeStage > index }]"
            @click="activeStage = index"
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
                  <div class="card-label">首次限时作答 · 节选</div>
                  <p>
                    “From my perspective, it is impossible for a <mark>full-time job person maintaining</mark>
                    a healthy social life… your <mark>peer are</mark> competitive… If a person
                    <mark>start</mark> a social activity…”
                  </p>
                  <div class="paper-footer"><span>立场明确</span><span>逻辑完整</span><span>实例具体</span></div>
                </article>
                <article class="diagnosis-card">
                  <div class="card-label">AI 发现了什么</div>
                  <div class="issue-count"><strong>12+</strong><span>处可见问题</span></div>
                  <div class="issue-chips">
                    <span>动词形式 × 5</span><span>主谓一致 × 3</span><span>搭配 × 3</span>
                    <span>单复数</span><span>时态</span><span>表达自然度</span>
                  </div>
                  <div class="warning-box">把这些一次性全交给学生，不叫个性化学习，只叫信息过载。</div>
                </article>
              </div>

              <div v-else-if="activeStage === 1" class="decision-stage">
                <div class="compression-card">
                  <span class="muted-number">12+</span><span class="compress-symbol">→</span><span class="strong-number">1</span>
                  <p>从“所有问题”压缩为“现在最值得解决的问题”</p>
                </div>
                <div class="priority-layout">
                  <article class="priority-main">
                    <div class="focus-title"><span>PRIORITY 01</span><h3>动词骨架稳定性</h3></div>
                    <p>它高频出现、直接破坏句子完整性，而且是后续复杂句式的前置能力。</p>
                    <ul>
                      <li><b>为什么现在练：</b>同一篇中反复出现，短期可通过针对练习降低频率</li>
                      <li><b>本轮成功标准：</b>4 个目标句中至少 3 个动词结构正确</li>
                      <li><b>暂时不追求：</b>高级词汇与复杂句式，避免同时增加认知负担</li>
                    </ul>
                  </article>
                  <article class="deferred-card">
                    <div class="card-label">NOT NOW · 暂缓</div>
                    <div><span>02</span><p><b>词汇自然度</b><small>先保证句子站得住</small></p></div>
                    <div><span>03</span><p><b>高级句式</b><small>不是当前得分瓶颈</small></p></div>
                    <div><span>04</span><p><b>内容扩充</b><small>已有完整论证链</small></p></div>
                  </article>
                </div>
              </div>

              <div v-else-if="activeStage === 2" class="repair-stage">
                <div class="score-rise"><span>Agent 预估</span><strong>3.0</strong><i>→</i><strong>4.5</strong><b>同题计时二稿</b></div>
                <div class="repair-list">
                  <div><span>BEFORE</span><p>I <mark>was used to consider</mark> myself a high-energy person.</p></div>
                  <div><span>AFTER</span><p>I <strong>used to consider</strong> myself a high-energy person.</p></div>
                  <div><span>BEFORE</span><p>my full of energy <mark>were lost</mark></p></div>
                  <div><span>AFTER</span><p>I found myself completely <strong>drained of energy</strong>.</p></div>
                </div>
                <div class="coach-observation">
                  <b>教练判断</b>
                  <p>同题修复显著，但二稿仍出现 “all I want to do was staying”。这不是“已掌握”，而是<strong>会模仿，尚待迁移</strong>。</p>
                </div>
              </div>

              <div v-else-if="activeStage === 3" class="memory-stage">
                <div class="memory-intro">
                  <span class="section-kicker">SMART MISTAKE MEMORY</span>
                  <h3>错题本不收藏错误，它保存“下次怎么避免”</h3>
                  <p>AI 生成候选卡，学生确认自己的错误原因与记忆点，系统再跟踪它是否在新作文里复发。</p>
                </div>
                <button :class="['mistake-card', { saved: cardSaved }]" @click="cardSaved = !cardSaved">
                  <div class="mistake-top"><span>核心错因 · 动词结构</span><b>{{ cardSaved ? '✓ 已存入学习记忆' : '+ 确认并存档' }}</b></div>
                  <div class="mistake-example"><del>I was used to consider…</del><span>→</span><strong>I used to consider…</strong></div>
                  <div class="memory-grid">
                    <p><small>为什么错</small>混淆 used to do 与 be used to doing</p>
                    <p><small>下次自检</small>看到 used to，先判断“过去常常”还是“习惯于”</p>
                    <p><small>当前状态</small><em>同题已修复 · 新题待验证</em></p>
                  </div>
                </button>
              </div>

              <div v-else class="replan-stage">
                <div class="route-before">
                  <span>原计划</span><b>再写一篇完整作文</b>
                </div>
                <div class="replan-pulse">AI 已重新规划</div>
                <div class="route-after">
                  <article><span>01 · 6 MIN</span><b>微型改错</b><p>识别 4 组动词结构中的错误</p></article>
                  <i>→</i>
                  <article><span>02 · 8 MIN</span><b>句子生成</b><p>用目标结构完成 4 个新句</p></article>
                  <i>→</i>
                  <article class="route-active"><span>03 · 10 MIN</span><b>新题迁移</b><p>在陌生话题中自主使用并验证</p></article>
                </div>
                <div class="route-result">
                  <div><small>如果不再复发</small><strong>标记为「已掌握」</strong></div>
                  <div><small>如果再次出现</small><strong>自动回到微训练</strong></div>
                </div>
              </div>
            </div>
          </transition>

          <div class="panel-footer">
            <span>Student A · Academic Discussion · 真实匿名记录</span>
            <button v-if="activeStage < stages.length - 1" class="primary-button" @click="next">
              {{ ['让 AI 做教学取舍', '查看同题修复', '生成智能错题卡', '开始迁移验证'][activeStage] }} <span>→</span>
            </button>
            <button v-else class="primary-button" @click="activeStage = 0; cardSaved = false">再看一遍 ↻</button>
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
.stage-panel { min-height: 530px; border: 1px solid rgba(198,255,229,.13); background: #0c1815; border-radius: 24px; padding: clamp(24px, 4vw, 48px); box-shadow: 0 30px 100px rgba(0,0,0,.25); display: flex; flex-direction: column; justify-content: space-between; }
.two-column, .priority-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }.paper-card, .diagnosis-card, .priority-main, .deferred-card, .mistake-card { border: 1px solid rgba(255,255,255,.1); background: rgba(255,255,255,.025); border-radius: 18px; padding: 28px; }.paper-card p { font-family: Georgia, serif; font-size: 19px; line-height: 1.8; color: #d7e3de; }.paper-card mark, .repair-list mark { background: rgba(255,105,105,.16); color: #ffaaa3; padding: 1px 3px; }.paper-footer { display: flex; gap: 8px; flex-wrap: wrap; }.paper-footer span { color: #73dcb0; background: rgba(65,213,151,.08); padding: 6px 10px; border-radius: 99px; font-size: 11px; }.issue-count { display: flex; align-items: baseline; gap: 10px; margin: 22px 0; }.issue-count strong { font-size: 64px; color: #ffad91; line-height: 1; }.issue-count span { color: #8da198; }.issue-chips { display: flex; flex-wrap: wrap; gap: 8px; }.issue-chips span { border: 1px solid #344840; padding: 7px 10px; border-radius: 7px; color: #a9bcb4; font-size: 12px; }.warning-box { margin-top: 28px; padding: 16px; border-left: 3px solid #ffb18f; background: rgba(255,148,109,.07); color: #e4b8a8; line-height: 1.6; font-size: 13px; }
.compression-card { display: flex; justify-content: center; align-items: center; gap: 25px; margin: 4px auto 28px; flex-wrap: wrap; }.compression-card .muted-number { font-size: 66px; color: #51645d; font-weight: 850; }.compression-card .strong-number { font-size: 82px; color: #69e9b2; font-weight: 900; }.compress-symbol { font-size: 38px; color: #6e857b; }.compression-card p { flex-basis: 100%; text-align: center; color: #7d948a; margin: -12px 0 0; }.priority-main { border-color: rgba(78,225,162,.35); background: linear-gradient(135deg, rgba(59,218,151,.1), rgba(255,255,255,.02)); }.focus-title span { color: #62e3aa; font-size: 11px; letter-spacing: .12em; }.focus-title h3 { margin: 8px 0 14px; font-size: 30px; }.priority-main > p, .priority-main li { color: #a8bcb3; line-height: 1.65; }.priority-main ul { padding-left: 20px; }.priority-main li { margin: 8px 0; }.priority-main li b { color: #dff5eb; }.deferred-card > div:not(.card-label) { display: flex; gap: 16px; align-items: center; border-bottom: 1px solid rgba(255,255,255,.07); padding: 16px 0; }.deferred-card div > span { color: #4f665d; font-weight: 850; }.deferred-card p { margin: 0; display: flex; flex-direction: column; gap: 4px; }.deferred-card small { color: #60776e; }
.score-rise { display: flex; align-items: center; justify-content: center; gap: 18px; flex-wrap: wrap; margin-bottom: 28px; }.score-rise span, .score-rise b { color: #789087; font-size: 12px; }.score-rise strong { font-size: 48px; }.score-rise i { color: #54e0a5; font-size: 30px; }.repair-list { display: grid; grid-template-columns: 100px 1fr; border: 1px solid rgba(255,255,255,.09); border-radius: 16px; overflow: hidden; }.repair-list > div { display: contents; }.repair-list span, .repair-list p { padding: 15px 18px; margin: 0; border-bottom: 1px solid rgba(255,255,255,.07); }.repair-list span { color: #657a72; font-size: 10px; letter-spacing: .1em; background: rgba(255,255,255,.02); }.repair-list p { color: #c7d5cf; }.repair-list strong { color: #6ee7b3; }.coach-observation { margin-top: 24px; padding: 17px 20px; background: rgba(255,194,105,.07); border: 1px solid rgba(255,194,105,.15); border-radius: 12px; display: flex; gap: 18px; }.coach-observation b { color: #ffc778; white-space: nowrap; }.coach-observation p { margin: 0; color: #b9c9c2; line-height: 1.6; }
.memory-intro { text-align: center; max-width: 690px; margin: 0 auto 28px; }.memory-intro h3 { font-size: 30px; margin: 10px 0; }.memory-intro p { color: #849b91; line-height: 1.65; }.mistake-card { width: 100%; color: inherit; text-align: left; cursor: pointer; transition: .25s; }.mistake-card:hover, .mistake-card.saved { border-color: #55dfa5; transform: translateY(-2px); }.mistake-top { display: flex; justify-content: space-between; gap: 20px; }.mistake-top > span { color: #7f948b; }.mistake-top b { color: #69e9b2; }.mistake-example { margin: 24px 0; display: flex; gap: 18px; align-items: center; justify-content: center; font-size: 17px; flex-wrap: wrap; }.mistake-example del { color: #df9189; }.mistake-example strong { color: #74e7b6; }.memory-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }.memory-grid p { background: #0a1512; padding: 14px; border-radius: 10px; margin: 0; color: #c0d0c9; line-height: 1.5; }.memory-grid small { display: block; color: #61766d; margin-bottom: 7px; }.memory-grid em { color: #ffc87d; font-style: normal; }
.route-before { display: flex; align-items: center; justify-content: center; gap: 14px; color: #637970; text-decoration: line-through; }.route-before span { font-size: 11px; letter-spacing: .12em; }.replan-pulse { width: max-content; margin: 25px auto; padding: 9px 15px; border: 1px solid rgba(84,224,165,.32); background: rgba(84,224,165,.08); color: #6fe9b6; border-radius: 99px; font-size: 12px; font-weight: 850; box-shadow: 0 0 35px rgba(56,222,151,.12); }.route-after { display: grid; grid-template-columns: 1fr auto 1fr auto 1fr; align-items: center; gap: 12px; }.route-after article { min-height: 145px; border: 1px solid rgba(255,255,255,.1); padding: 20px; border-radius: 15px; display: flex; flex-direction: column; }.route-after article > span { font-size: 10px; color: #637970; letter-spacing: .1em; }.route-after article b { font-size: 20px; margin: 15px 0 8px; }.route-after article p { color: #788f85; line-height: 1.5; margin: 0; }.route-after .route-active { border-color: #58dfaa; background: rgba(65,219,153,.08); }.route-after i { color: #50d89f; }.route-result { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-top: 28px; }.route-result > div { padding: 15px; background: rgba(255,255,255,.025); border-radius: 10px; display: flex; justify-content: space-between; }.route-result small { color: #6e837a; }.route-result strong { color: #c9ddd4; }
.panel-footer { margin-top: 36px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,.08); display: flex; justify-content: space-between; align-items: center; gap: 20px; }.panel-footer > span { color: #61766e; font-size: 11px; }.teacher-proof { max-width: 1240px; margin: 0 auto; padding: 55px; border-radius: 24px; color: #07120e; background: #baf7dc; display: grid; grid-template-columns: 1.1fr .9fr; align-items: end; gap: 50px; }.teacher-proof span { color: #18734f; font-weight: 850; font-size: 11px; letter-spacing: .14em; }.teacher-proof h2 { font-size: 33px; line-height: 1.25; letter-spacing: -.035em; margin: 14px 0 0; }.teacher-proof p { color: #356550; line-height: 1.7; margin: 0; }.stage-fade-enter-active, .stage-fade-leave-active { transition: opacity .16s ease, transform .16s ease; }.stage-fade-enter-from { opacity: 0; transform: translateY(8px); }.stage-fade-leave-to { opacity: 0; transform: translateY(-5px); }
@media (max-width: 850px) {
  .coach-page { grid-template-columns: 76px minmax(0, 1fr); }.product-sidebar { padding: 22px 10px; }.brand { font-size: 18px; padding-left: 6px; }.brand span, .side-link span, .side-link b, .student-profile p { display: none; }.side-link { grid-template-columns: 1fr; text-align: center; }.student-profile { justify-content: center; }.today-grid { grid-template-columns: 1fr; }.today-focus { grid-template-columns: 1fr; }.focus-meter { display: none; }.quick-stats { grid-template-columns: 1fr; }.hero-section { grid-template-columns: 1fr; padding-top: 60px; }.decision-visual { min-height: 390px; }.two-column, .priority-layout, .teacher-proof { grid-template-columns: 1fr; }.memory-grid { grid-template-columns: 1fr; }.route-after { grid-template-columns: 1fr; }.route-after > i { transform: rotate(90deg); text-align: center; }.stage-track { overflow-x: auto; grid-template-columns: repeat(5, 110px); justify-content: start; }.track-line { display: none; }.teacher-proof { padding: 30px; }
}
@media (max-width: 560px) {
  .coach-page { display: block; }.product-sidebar { display: none; }.product-main { padding: 0 15px 45px; }.workspace-header { min-height: 80px; }.workspace-header h1 { font-size: 20px; }.roadshow-badge { display: none; }.today-focus { padding: 24px 20px; }.quick-stats { display: none; }.hero-section, .demo-section { padding-left: 0; padding-right: 0; }.hero-copy h1 { font-size: 39px; }.stage-panel { padding: 18px; }.repair-list { grid-template-columns: 70px 1fr; }.panel-footer { align-items: stretch; flex-direction: column; }.section-heading { align-items: start; flex-direction: column; }.proof-strip { justify-content: flex-start; }.strip-divider { display: none; }.coach-observation { flex-direction: column; gap: 7px; }
}
</style>
