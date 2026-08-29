<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import DemoSidebar from "../components/DemoSidebar.vue";
import { discussionCase, steecCase } from "../data/demoLearningData";
const router=useRouter();
const expanded=ref(discussionCase.id);
const selected=ref(null);
</script>

<template>
  <div class="demo-app"><DemoSidebar/><main class="records-main">
    <header><div><span>LONGITUDINAL LEARNING EVIDENCE</span><h1>我的练习记录</h1><p>同一道题的每次练习归在一起，看见分数之外真正发生的变化。</p></div><button @click="router.push('/demo-practice')">继续练习</button></header>
    <section class="stats"><div><strong>3</strong><span>总练习次数</span></div><div><strong>2</strong><span>同题连续练习</span></div><div><strong>+1.5</strong><span>Agent预估变化</span></div><div><strong>3</strong><span>待验证学习记忆</span></div></section>
    <section class="record-group">
      <button class="group-head" @click="expanded=expanded===discussionCase.id?'':discussionCase.id"><span class="type">学术讨论</span><span class="group-title"><b>{{discussionCase.title}}</b><small>最近练习：08月11日 · 动词骨架稳定性</small></span><span class="practice-count">已练习 2 次</span><span class="latest-score">最新 4.5</span><i>{{expanded===discussionCase.id?'⌃':'⌄'}}</i></button>
      <div v-if="expanded===discussionCase.id" class="attempt-list">
        <button v-for="attempt in discussionCase.attempts" :key="attempt.number" @click="selected=attempt"><span>第 {{attempt.number}} 次</span><b>{{attempt.score}}</b><p>{{attempt.date}} · 用时 10:00</p><em>{{attempt.focus}}</em><i>查看作答 →</i></button>
      </div>
    </section>
    <section class="record-group">
      <button class="group-head" @click="expanded=expanded===steecCase.id?'':steecCase.id"><span class="type structure">结构案例</span><span class="group-title"><b>{{steecCase.title}}</b><small>真实匿名作文 · STEEC功能诊断</small></span><span class="practice-count">已练习 1 次</span><span class="latest-score pending">待训练</span><i>{{expanded===steecCase.id?'⌃':'⌄'}}</i></button>
      <div v-if="expanded===steecCase.id" class="attempt-list"><button @click="router.push('/learning-coach/steec')"><span>第 1 次</span><b>—</b><p>论点、解释与例子功能失效</p><em>当前重点：先修复 T</em><i>进入结构教练 →</i></button></div>
    </section>
    <div v-if="selected" class="overlay" @click.self="selected=null"><article class="detail"><button class="close" @click="selected=null">关闭</button><span>第 {{selected.number}} 次作答 · Agent预估 {{selected.score}}</span><h2>{{discussionCase.title}}</h2><p>{{selected.answer}}</p><div><b>本轮训练重点</b>{{selected.focus}}</div></article></div>
  </main></div>
</template>

<style scoped>
.demo-app{min-height:100vh;display:grid;grid-template-columns:230px minmax(0,1fr);background:#07110f;color:#effbf6;font-family:Inter,system-ui,sans-serif}.records-main{padding:0 clamp(22px,4vw,60px) 60px;min-width:0}header{min-height:130px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid rgba(255,255,255,.08)}header span{color:#657c72;font-size:10px;font-weight:800;letter-spacing:.13em}h1{font-size:28px;margin:6px 0}header p{color:#70877d;margin:0}header button{border:0;background:#67e5af;color:#062218;border-radius:9px;padding:11px 15px;font-weight:800;cursor:pointer}.stats{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin:28px 0}.stats div{padding:20px;border:1px solid rgba(255,255,255,.09);background:#0c1915;border-radius:13px;display:flex;flex-direction:column}.stats strong{font-size:26px}.stats span{color:#6d837a;font-size:11px;margin-top:5px}.record-group{border:1px solid rgba(255,255,255,.1);border-radius:14px;background:#0c1915;margin-bottom:14px;overflow:hidden}.group-head{width:100%;display:grid;grid-template-columns:90px 1fr 110px 100px 24px;align-items:center;gap:14px;border:0;background:transparent;color:#d8e7e0;padding:21px;text-align:left;cursor:pointer}.type{width:max-content;padding:6px 9px;border-radius:99px;background:rgba(77,222,159,.09);color:#68e3b0;font-size:10px}.type.structure{background:rgba(255,190,101,.09);color:#ffc779}.group-title{display:flex;flex-direction:column;gap:5px}.group-title small{color:#687f75}.practice-count,.latest-score{color:#90a59c;font-size:12px}.latest-score{font-size:17px;font-weight:850;color:#6be4b2}.latest-score.pending{color:#ffc579}.group-head>i{font-style:normal}.attempt-list{border-top:1px solid rgba(255,255,255,.08);padding:8px 20px 16px 112px}.attempt-list button{width:100%;display:grid;grid-template-columns:80px 65px 1fr 1.2fr 100px;gap:12px;align-items:center;border:0;border-bottom:1px solid rgba(255,255,255,.06);background:transparent;color:#9bb0a7;padding:16px 0;text-align:left;cursor:pointer}.attempt-list b{font-size:20px;color:#eaf8f2}.attempt-list p{margin:0;color:#667d73}.attempt-list em{font-style:normal;color:#77dfb4}.attempt-list i{font-style:normal;color:#5bdba5}.overlay{position:fixed;inset:0;background:rgba(0,0,0,.7);display:grid;place-items:center;padding:20px;z-index:50}.detail{width:min(760px,100%);max-height:84vh;overflow:auto;background:#0d1c18;border:1px solid #294139;border-radius:17px;padding:30px;position:relative}.detail .close{position:absolute;right:20px;top:20px;border:1px solid #385148;background:transparent;color:#9bb0a7;border-radius:7px;padding:7px 10px}.detail>span{color:#62dda9;font-size:11px}.detail h2{font-size:25px}.detail>p{font:17px/1.75 Georgia,serif;color:#c1d1ca}.detail>div{padding:15px;background:#10251e;border-radius:10px;color:#8da39a}.detail>div b{display:block;color:#67e0ad;margin-bottom:6px}@media(max-width:850px){.demo-app{grid-template-columns:76px minmax(0,1fr)}.stats{grid-template-columns:repeat(2,1fr)}.attempt-list{padding-left:20px}}@media(max-width:650px){.demo-app{display:block}.records-main{padding:0 15px 40px}.group-head{grid-template-columns:1fr auto}.group-head .type,.practice-count{display:none}.attempt-list button{grid-template-columns:60px 50px 1fr}.attempt-list p,.attempt-list em{display:none}.stats{grid-template-columns:1fr 1fr}}
</style>
