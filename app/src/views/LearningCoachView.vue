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
    <header class="coach-nav">
      <button class="brand" @click="router.push('/')">TOEFL Writing Improver</button>
      <div class="nav-actions">
        <span class="roadshow-badge"><i></i> ROADSHOW MODE</span>
        <button class="ghost-button" @click="router.push('/practice')">进入练习平台</button>
      </div>
    </header>

    <main>
      <section class="hero-section">
        <div class="hero-copy">
          <div class="eyebrow">REAL STUDENT · ANONYMIZED CASE</div>
          <h1>AI 能指出 20 个问题。<br><em>真正困难的是：先改哪一个？</em></h1>
          <p>
            我们不是让 AI 再批改一次，而是把一线教师的教学取舍变成一条会随表现改变的训练路径。
          </p>
          <div class="hero-actions">
            <button class="primary-button" @click="jumpToDemo">开始 3 分钟演示 <span>→</span></button>
            <span class="case-note">真实匿名案例 · 非预设理想作文</span>
          </div>
        </div>

        <div class="decision-visual" aria-label="从多个问题中选择一个训练重点">
          <div class="visual-label">本次教学决策</div>
          <div class="noise-cloud">
            <span>冠词</span><span>时态</span><span>搭配</span><span>单复数</span>
            <span>句式</span><span>词汇</span><span>回应观点</span><span>表达自然度</span>
          </div>
          <div class="decision-arrow">↓</div>
          <div class="focus-orb">
            <small>FOCUS NOW</small>
            <strong>动词骨架<br>稳定性</strong>
            <b>只练这一件事</b>
          </div>
        </div>
      </section>

      <section class="proof-strip">
        <div><strong>3.0</strong><span>首次作答 · Agent 预估</span></div>
        <div class="strip-arrow">→</div>
        <div><strong>4.5</strong><span>同题二稿 · Agent 预估</span></div>
        <div class="strip-divider"></div>
        <div><strong>4.5 → 5.0</strong><span>该生一个月官方写作成绩变化</span></div>
        <p>期间使用网站练习并接受 1 小时课程；仅作真实案例说明，不等同于因果证明。</p>
      </section>

      <section id="coach-demo" class="demo-section">
        <div class="section-heading">
          <div>
            <span class="section-kicker">THE TEACHING DECISION LOOP</span>
            <h2>不是一份静态学习计划，而是一条会重新规划的路</h2>
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
.coach-page { min-height: 100vh; background: #07110f; color: #effbf6; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
button { font-family: inherit; }
.coach-nav { height: 68px; padding: 0 clamp(20px, 4vw, 64px); display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid rgba(199,255,230,.12); background: rgba(7,17,15,.88); backdrop-filter: blur(18px); position: sticky; top: 0; z-index: 20; }
.brand { color: #f6fff9; background: none; border: 0; font-weight: 800; letter-spacing: -.02em; cursor: pointer; }
.nav-actions { display: flex; align-items: center; gap: 14px; }
.roadshow-badge { font-size: 11px; font-weight: 800; color: #9be7c8; letter-spacing: .12em; display: flex; align-items: center; gap: 7px; }
.roadshow-badge i { width: 7px; height: 7px; border-radius: 50%; background: #48e6a4; box-shadow: 0 0 0 5px rgba(72,230,164,.12); }
.ghost-button, .reset-button { color: #d6e7df; background: transparent; border: 1px solid rgba(218,255,238,.18); padding: 9px 14px; border-radius: 9px; cursor: pointer; }
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
.demo-section { max-width: 1240px; margin: auto; padding: 100px 36px; scroll-margin-top: 72px; }
.section-heading { display: flex; align-items: end; justify-content: space-between; gap: 30px; margin-bottom: 45px; }.section-heading h2 { font-size: clamp(28px, 4vw, 46px); letter-spacing: -.04em; margin: 12px 0 0; max-width: 780px; }
.stage-track { position: relative; display: grid; grid-template-columns: repeat(5, 1fr); gap: 10px; margin-bottom: 22px; }.track-line { position: absolute; top: 20px; left: 7%; right: 7%; height: 2px; background: #1d302a; }.track-line i { display: block; height: 100%; background: #55e3a5; transition: width .4s ease; }
.stage-button { position: relative; z-index: 1; background: transparent; border: 0; color: #647a71; display: flex; flex-direction: column; align-items: center; cursor: pointer; }.stage-button > span { width: 40px; height: 40px; display: grid; place-items: center; border-radius: 50%; background: #0d1c18; border: 1px solid #21372f; font-weight: 800; transition: .25s; }.stage-button b { margin-top: 10px; color: #7c9188; font-size: 13px; }.stage-button small { margin-top: 4px; }.stage-button.active > span, .stage-button.done > span { background: #57e0a5; color: #062117; border-color: #57e0a5; box-shadow: 0 0 25px rgba(68,221,157,.2); }.stage-button.active b { color: #effbf6; }
.stage-panel { min-height: 530px; border: 1px solid rgba(198,255,229,.13); background: #0c1815; border-radius: 24px; padding: clamp(24px, 4vw, 48px); box-shadow: 0 30px 100px rgba(0,0,0,.25); display: flex; flex-direction: column; justify-content: space-between; }
.two-column, .priority-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }.paper-card, .diagnosis-card, .priority-main, .deferred-card, .mistake-card { border: 1px solid rgba(255,255,255,.1); background: rgba(255,255,255,.025); border-radius: 18px; padding: 28px; }.paper-card p { font-family: Georgia, serif; font-size: 19px; line-height: 1.8; color: #d7e3de; }.paper-card mark, .repair-list mark { background: rgba(255,105,105,.16); color: #ffaaa3; padding: 1px 3px; }.paper-footer { display: flex; gap: 8px; flex-wrap: wrap; }.paper-footer span { color: #73dcb0; background: rgba(65,213,151,.08); padding: 6px 10px; border-radius: 99px; font-size: 11px; }.issue-count { display: flex; align-items: baseline; gap: 10px; margin: 22px 0; }.issue-count strong { font-size: 64px; color: #ffad91; line-height: 1; }.issue-count span { color: #8da198; }.issue-chips { display: flex; flex-wrap: wrap; gap: 8px; }.issue-chips span { border: 1px solid #344840; padding: 7px 10px; border-radius: 7px; color: #a9bcb4; font-size: 12px; }.warning-box { margin-top: 28px; padding: 16px; border-left: 3px solid #ffb18f; background: rgba(255,148,109,.07); color: #e4b8a8; line-height: 1.6; font-size: 13px; }
.compression-card { display: flex; justify-content: center; align-items: center; gap: 25px; margin: 4px auto 28px; flex-wrap: wrap; }.compression-card .muted-number { font-size: 66px; color: #51645d; font-weight: 850; }.compression-card .strong-number { font-size: 82px; color: #69e9b2; font-weight: 900; }.compress-symbol { font-size: 38px; color: #6e857b; }.compression-card p { flex-basis: 100%; text-align: center; color: #7d948a; margin: -12px 0 0; }.priority-main { border-color: rgba(78,225,162,.35); background: linear-gradient(135deg, rgba(59,218,151,.1), rgba(255,255,255,.02)); }.focus-title span { color: #62e3aa; font-size: 11px; letter-spacing: .12em; }.focus-title h3 { margin: 8px 0 14px; font-size: 30px; }.priority-main > p, .priority-main li { color: #a8bcb3; line-height: 1.65; }.priority-main ul { padding-left: 20px; }.priority-main li { margin: 8px 0; }.priority-main li b { color: #dff5eb; }.deferred-card > div:not(.card-label) { display: flex; gap: 16px; align-items: center; border-bottom: 1px solid rgba(255,255,255,.07); padding: 16px 0; }.deferred-card div > span { color: #4f665d; font-weight: 850; }.deferred-card p { margin: 0; display: flex; flex-direction: column; gap: 4px; }.deferred-card small { color: #60776e; }
.score-rise { display: flex; align-items: center; justify-content: center; gap: 18px; flex-wrap: wrap; margin-bottom: 28px; }.score-rise span, .score-rise b { color: #789087; font-size: 12px; }.score-rise strong { font-size: 48px; }.score-rise i { color: #54e0a5; font-size: 30px; }.repair-list { display: grid; grid-template-columns: 100px 1fr; border: 1px solid rgba(255,255,255,.09); border-radius: 16px; overflow: hidden; }.repair-list > div { display: contents; }.repair-list span, .repair-list p { padding: 15px 18px; margin: 0; border-bottom: 1px solid rgba(255,255,255,.07); }.repair-list span { color: #657a72; font-size: 10px; letter-spacing: .1em; background: rgba(255,255,255,.02); }.repair-list p { color: #c7d5cf; }.repair-list strong { color: #6ee7b3; }.coach-observation { margin-top: 24px; padding: 17px 20px; background: rgba(255,194,105,.07); border: 1px solid rgba(255,194,105,.15); border-radius: 12px; display: flex; gap: 18px; }.coach-observation b { color: #ffc778; white-space: nowrap; }.coach-observation p { margin: 0; color: #b9c9c2; line-height: 1.6; }
.memory-intro { text-align: center; max-width: 690px; margin: 0 auto 28px; }.memory-intro h3 { font-size: 30px; margin: 10px 0; }.memory-intro p { color: #849b91; line-height: 1.65; }.mistake-card { width: 100%; color: inherit; text-align: left; cursor: pointer; transition: .25s; }.mistake-card:hover, .mistake-card.saved { border-color: #55dfa5; transform: translateY(-2px); }.mistake-top { display: flex; justify-content: space-between; gap: 20px; }.mistake-top > span { color: #7f948b; }.mistake-top b { color: #69e9b2; }.mistake-example { margin: 24px 0; display: flex; gap: 18px; align-items: center; justify-content: center; font-size: 17px; flex-wrap: wrap; }.mistake-example del { color: #df9189; }.mistake-example strong { color: #74e7b6; }.memory-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }.memory-grid p { background: #0a1512; padding: 14px; border-radius: 10px; margin: 0; color: #c0d0c9; line-height: 1.5; }.memory-grid small { display: block; color: #61766d; margin-bottom: 7px; }.memory-grid em { color: #ffc87d; font-style: normal; }
.route-before { display: flex; align-items: center; justify-content: center; gap: 14px; color: #637970; text-decoration: line-through; }.route-before span { font-size: 11px; letter-spacing: .12em; }.replan-pulse { width: max-content; margin: 25px auto; padding: 9px 15px; border: 1px solid rgba(84,224,165,.32); background: rgba(84,224,165,.08); color: #6fe9b6; border-radius: 99px; font-size: 12px; font-weight: 850; box-shadow: 0 0 35px rgba(56,222,151,.12); }.route-after { display: grid; grid-template-columns: 1fr auto 1fr auto 1fr; align-items: center; gap: 12px; }.route-after article { min-height: 145px; border: 1px solid rgba(255,255,255,.1); padding: 20px; border-radius: 15px; display: flex; flex-direction: column; }.route-after article > span { font-size: 10px; color: #637970; letter-spacing: .1em; }.route-after article b { font-size: 20px; margin: 15px 0 8px; }.route-after article p { color: #788f85; line-height: 1.5; margin: 0; }.route-after .route-active { border-color: #58dfaa; background: rgba(65,219,153,.08); }.route-after i { color: #50d89f; }.route-result { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-top: 28px; }.route-result > div { padding: 15px; background: rgba(255,255,255,.025); border-radius: 10px; display: flex; justify-content: space-between; }.route-result small { color: #6e837a; }.route-result strong { color: #c9ddd4; }
.panel-footer { margin-top: 36px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,.08); display: flex; justify-content: space-between; align-items: center; gap: 20px; }.panel-footer > span { color: #61766e; font-size: 11px; }.teacher-proof { max-width: 1168px; margin: 0 auto 100px; padding: 55px; border-radius: 24px; color: #07120e; background: #baf7dc; display: grid; grid-template-columns: 1.1fr .9fr; align-items: end; gap: 50px; }.teacher-proof span { color: #18734f; font-weight: 850; font-size: 11px; letter-spacing: .14em; }.teacher-proof h2 { font-size: 33px; line-height: 1.25; letter-spacing: -.035em; margin: 14px 0 0; }.teacher-proof p { color: #356550; line-height: 1.7; margin: 0; }.stage-fade-enter-active, .stage-fade-leave-active { transition: opacity .16s ease, transform .16s ease; }.stage-fade-enter-from { opacity: 0; transform: translateY(8px); }.stage-fade-leave-to { opacity: 0; transform: translateY(-5px); }
@media (max-width: 850px) {
  .hero-section { grid-template-columns: 1fr; padding-top: 60px; }.decision-visual { min-height: 390px; }.two-column, .priority-layout, .teacher-proof { grid-template-columns: 1fr; }.memory-grid { grid-template-columns: 1fr; }.route-after { grid-template-columns: 1fr; }.route-after > i { transform: rotate(90deg); text-align: center; }.stage-track { overflow-x: auto; grid-template-columns: repeat(5, 110px); justify-content: start; }.track-line { display: none; }.teacher-proof { margin-left: 20px; margin-right: 20px; padding: 30px; }
}
@media (max-width: 560px) {
  .coach-nav { padding: 0 16px; }.roadshow-badge { display: none; }.hero-section, .demo-section { padding-left: 18px; padding-right: 18px; }.hero-copy h1 { font-size: 39px; }.stage-panel { padding: 18px; }.repair-list { grid-template-columns: 70px 1fr; }.panel-footer { align-items: stretch; flex-direction: column; }.section-heading { align-items: start; flex-direction: column; }.proof-strip { justify-content: flex-start; }.strip-divider { display: none; }.coach-observation { flex-direction: column; gap: 7px; }
}
</style>
