<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <div class="welcome-page">
    <header class="welcome-header">
      <span class="welcome-logo">TOEFL Writing Improver</span>
    </header>

    <main class="welcome-main">
      <section class="welcome-hero">
        <span class="welcome-kicker">NEW · AI LEARNING COACH</span>
        <h1 class="welcome-title">AI 会批改。<br>我们让它学会决定先练什么。</h1>
        <p class="welcome-subtitle">
          一篇作文可以有十几个问题，但学生一次只需要解决最值得解决的那一个。
          基于真实学习记录，AI 诊断、取舍，并随表现重新规划下一步训练。
        </p>
        <div class="welcome-cta">
          <button class="btn-primary" @click="router.push('/learning-coach')">观看 3 分钟真实案例</button>
          <button class="btn-secondary" @click="router.push('/login')">进入练习平台</button>
        </div>
        <div class="feedback-invite">
          <span>这是内测版本，建议先完成体验，再告诉我哪一步最有价值。</span>
          <button @click="router.push('/demo-practice')">体验 Demo · 提交反馈 →</button>
        </div>
      </section>

      <section class="welcome-features">
        <div class="feature-card">
          <div class="feature-icon">✍️</div>
          <h3 class="feature-title">限时写作练习</h3>
          <p class="feature-desc">模拟真实考试环境，设置倒计时，帮助学生在压力下保持专注与高效。</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🤖</div>
          <h3 class="feature-title">AI 智能评分</h3>
          <p class="feature-desc">提交作答后由 AI 即时批改，提供结构、语言和内容层面的详细反馈。</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">📊</div>
          <h3 class="feature-title">教师统一管理</h3>
          <p class="feature-desc">教师可发布题目、查看学生提交记录，并在仪表盘中一览班级整体情况。</p>
        </div>
      </section>
    </main>

    <footer class="welcome-footer">
      <span>© 2025 TOEFL Writing Improver · 让每一次练习都有意义</span>
    </footer>
  </div>
</template>

<style scoped>
.welcome-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #fff;
}

/* Header */
.welcome-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 32px;
  background: #1a1a1a;
}

.welcome-logo {
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.02em;
}

/* Hero */
.welcome-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 16px 60px;
}

.welcome-hero {
  max-width: 760px;
  width: 100%;
  text-align: center;
  padding: 80px 0 60px;
}

.welcome-kicker {
  display: inline-flex;
  padding: 7px 12px;
  margin-bottom: 18px;
  border-radius: 999px;
  background: #e9fff6;
  color: #087c5b;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: .12em;
}

.welcome-title {
  font-size: 36px;
  font-weight: 800;
  color: #1a1a1a;
  margin: 0 0 20px;
  line-height: 1.2;
}

.welcome-subtitle {
  font-size: 16px;
  color: #555;
  line-height: 1.75;
  margin: 0 0 36px;
}

.welcome-cta {
  display: flex;
  justify-content: center;
  gap: 12px;
}

.btn-primary {
  padding: 12px 36px;
  background: #1a1a1a;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s;
}

.btn-primary:hover {
  background: #333;
}

.btn-secondary {
  padding: 12px 28px;
  background: #fff;
  color: #1a1a1a;
  border: 1px solid #cfcfcf;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
}

.feedback-invite{margin-top:18px;display:flex;align-items:center;justify-content:center;gap:10px;flex-wrap:wrap;color:#748078;font-size:12px}.feedback-invite button{border:0;background:transparent;color:#087c5b;font-weight:700;cursor:pointer;padding:3px}.feedback-invite button:hover{text-decoration:underline}

@media (max-width: 620px) {
  .welcome-title { font-size: 30px; }
  .welcome-cta { flex-direction: column; }
}

/* Features */
.welcome-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  max-width: 860px;
  width: 100%;
}

.feature-card {
  border: 1px solid #e4e4e4;
  border-radius: 12px;
  padding: 28px 24px;
  background: #fafafa;
  text-align: center;
}

.feature-icon {
  font-size: 32px;
  margin-bottom: 14px;
}

.feature-title {
  font-size: 16px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 10px;
}

.feature-desc {
  font-size: 14px;
  color: #666;
  line-height: 1.65;
  margin: 0;
}

/* Footer */
.welcome-footer {
  padding: 18px 32px;
  background: #f5f5f5;
  border-top: 1px solid #e4e4e4;
  text-align: center;
  font-size: 13px;
  color: #888;
}
</style>
