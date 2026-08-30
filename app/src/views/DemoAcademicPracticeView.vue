<script setup>
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import DemoSidebar from "../components/DemoSidebar.vue";
import { discussionCase } from "../data/demoLearningData";

const router = useRouter();
const selectedAttempt = ref(0);
const answer = ref(discussionCase.attempts[0].answer);
const wordCount = computed(() => answer.value.trim().split(/\s+/).filter(Boolean).length);
const loadAttempt = (index) => { selectedAttempt.value = index; answer.value = discussionCase.attempts[index].answer; };
const openCoach = () => {
  sessionStorage.setItem("demoCurrentAnswer", answer.value);
  router.push("/learning-coach");
};
</script>

<template>
  <div class="demo-app">
    <DemoSidebar />
    <main class="practice-main">
      <header><div><span>ACADEMIC DISCUSSION · 10 MIN</span><h1>写作练习</h1></div><button @click="router.push('/demo-records')">查看同题记录（2次）</button></header>
      <div class="attempt-tabs"><button v-for="(attempt,index) in discussionCase.attempts" :key="attempt.number" :class="{active:selectedAttempt===index}" @click="loadAttempt(index)">第{{attempt.number}}次作答 <b>本稿 Agent参考 {{attempt.score}}</b></button></div>
      <section class="exam-grid">
        <article class="prompt-panel">
          <div class="professor"><b>{{ discussionCase.professor }}</b><p>{{ discussionCase.question }}</p></div>
          <div v-for="student in discussionCase.students" :key="student.name" class="student-post"><b>{{ student.name }}</b><p>{{ student.text }}</p></div>
        </article>
        <article class="answer-panel">
          <div class="answer-head"><b>我的作答</b><span>10:00 · {{ wordCount }} words</span></div>
          <textarea v-model="answer" aria-label="Academic Discussion 作答"></textarea>
          <div class="answer-actions"><small>预载真实匿名作答，可编辑后进入诊断</small><button @click="openCoach">基于这条记录生成学习教练 →</button></div>
        </article>
      </section>
    </main>
  </div>
</template>

<style scoped>
.demo-app{min-height:100vh;display:grid;grid-template-columns:230px minmax(0,1fr);background:#07110f;color:#effbf6;font-family:Inter,system-ui,sans-serif}.practice-main{padding:0 clamp(22px,4vw,56px) 50px;min-width:0}header{min-height:94px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid rgba(255,255,255,.08)}header span{color:#687f75;font-size:10px;font-weight:800;letter-spacing:.13em}h1{margin:5px 0 0;font-size:25px}header button{border:1px solid #2b433a;background:transparent;color:#a9beb5;border-radius:9px;padding:10px 14px;cursor:pointer}.attempt-tabs{display:flex;gap:9px;margin:28px 0 14px}.attempt-tabs button{border:1px solid #294138;background:#0c1915;color:#738a80;padding:10px 14px;border-radius:10px;cursor:pointer}.attempt-tabs button.active{border-color:#60e1aa;color:#e9fff5}.attempt-tabs b{margin-left:14px;color:#6ce5b3}.exam-grid{display:grid;grid-template-columns:.92fr 1.08fr;min-height:650px;border:1px solid rgba(255,255,255,.1);border-radius:18px;overflow:hidden;background:#0c1815}.prompt-panel,.answer-panel{padding:30px}.prompt-panel{border-right:1px solid rgba(255,255,255,.1);overflow:auto}.professor,.student-post{padding-bottom:24px;margin-bottom:24px;border-bottom:1px solid rgba(255,255,255,.07)}.professor b,.student-post b{color:#67e4ae}.professor p,.student-post p{color:#c0d1ca;line-height:1.75;font-family:Georgia,serif}.student-post p{color:#8fa49b}.answer-panel{display:flex;flex-direction:column}.answer-head{display:flex;justify-content:space-between;color:#e5f2ec}.answer-head span{color:#687e75;font-size:11px}.answer-panel textarea{flex:1;min-height:490px;margin-top:18px;padding:20px;resize:none;border:1px solid #294138;border-radius:12px;background:#08130f;color:#e4f0eb;outline:none;font:17px/1.7 Georgia,serif}.answer-panel textarea:focus{border-color:#5be0a8}.answer-actions{display:flex;justify-content:space-between;align-items:center;gap:18px;margin-top:16px}.answer-actions small{color:#5f766c}.answer-actions button{border:0;background:#67e5af;color:#062218;padding:12px 16px;border-radius:9px;font-weight:850;cursor:pointer}@media(max-width:850px){.demo-app{grid-template-columns:76px minmax(0,1fr)}.exam-grid{grid-template-columns:1fr}.prompt-panel{border-right:0;border-bottom:1px solid rgba(255,255,255,.1)}}@media(max-width:560px){.demo-app{display:block}.practice-main{padding:0 15px 40px}.exam-grid{display:block}.answer-actions{align-items:stretch;flex-direction:column}}
</style>
