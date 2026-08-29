<script setup>
import { computed, ref } from "vue";
import DemoSidebar from "../components/DemoSidebar.vue";
import { learningMemories } from "../data/demoLearningData";
const filter=ref("全部");
const open=ref("verb-structure");
const reviewMode=ref(false);
const filters=["全部","训练中","迁移待验证","已掌握"];
const cards=computed(()=>{
  const filtered=filter.value==="全部"?learningMemories:learningMemories.filter(x=>x.status===filter.value);
  return reviewMode.value?filtered.filter(x=>x.status!=="已掌握"):filtered;
});
</script>
<template><div class="demo-app"><DemoSidebar/><main class="memory-main">
  <header><div><span>SMART LEARNING MEMORY</span><h1>智能学习记忆</h1><p>不堆积句子错误，只跟踪可以迁移的能力模式。</p></div><button :class="{active:reviewMode}" @click="reviewMode=!reviewMode">{{reviewMode?'退出考前模式':'考前复习模式'}}</button></header>
  <section class="memory-stats"><div><strong>2</strong><span>训练中</span></div><div><strong>1</strong><span>迁移待验证</span></div><div><strong>8</strong><span>已掌握</span></div></section>
  <nav><button v-for="item in filters" :key="item" :class="{active:filter===item}" @click="filter=item">{{item}}</button></nav>
  <section class="memory-list"><article v-for="card in cards" :key="card.id" :class="['memory-card',{expanded:open===card.id}]">
    <button class="memory-head" @click="open=open===card.id?'':card.id"><span :class="['domain',card.domain==='结构'?'structure':'']">{{card.domain}}</span><div><h2>{{card.title}}</h2><p>出现 {{card.count}} 次 · {{card.source}}</p></div><em>{{card.status}}</em><i>{{open===card.id?'⌃':'⌄'}}</i></button>
    <div v-if="open===card.id" class="memory-detail"><div><small>典型错误</small><del>{{card.before}}</del></div><div><small>修复表达</small><strong>{{card.after}}</strong></div><div><small>我的记忆点</small><p>{{card.rule}}</p></div><div><small>下一次验证</small><p>{{card.next}}</p></div><div class="timeline"><span class="done">首次发现</span><i></i><span class="done">同题修复</span><i></i><span :class="{done:card.status==='已掌握'}">新题迁移</span><i></i><span :class="{done:card.status==='已掌握'}">稳定掌握</span></div></div>
  </article></section>
</main></div></template>
<style scoped>
.demo-app{min-height:100vh;display:grid;grid-template-columns:230px minmax(0,1fr);background:#07110f;color:#effbf6;font-family:Inter,system-ui,sans-serif}.memory-main{padding:0 clamp(22px,4vw,60px) 60px;min-width:0}header{min-height:130px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid rgba(255,255,255,.08)}header span{color:#657c72;font-size:10px;font-weight:800;letter-spacing:.13em}h1{font-size:28px;margin:6px 0}header p{color:#71877e;margin:0}header button{border:1px solid #375047;background:transparent;color:#b4c7bf;border-radius:9px;padding:10px 14px}.memory-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin:28px 0 18px}.memory-stats div{padding:20px;border:1px solid rgba(255,255,255,.09);background:#0c1915;border-radius:13px}.memory-stats strong{display:block;font-size:26px}.memory-stats span{color:#71877e;font-size:11px}nav{display:flex;gap:8px;margin-bottom:17px}nav button{border:1px solid #294138;background:transparent;color:#71877e;border-radius:99px;padding:7px 12px;cursor:pointer}nav button.active{border-color:#5bdca6;color:#dbf6e9;background:rgba(77,222,159,.07)}.memory-card{border:1px solid rgba(255,255,255,.09);border-radius:14px;background:#0c1915;margin-bottom:12px;overflow:hidden}.memory-card.expanded{border-color:rgba(87,222,167,.35)}.memory-head{width:100%;display:grid;grid-template-columns:60px 1fr 120px 20px;gap:15px;align-items:center;padding:20px;border:0;background:transparent;color:#e8f5ef;text-align:left;cursor:pointer}.domain{width:max-content;padding:5px 9px;border-radius:99px;background:rgba(77,222,159,.09);color:#68e3b0;font-size:10px}.domain.structure{background:rgba(255,190,101,.09);color:#ffc779}.memory-head h2{font-size:16px;margin:0 0 5px}.memory-head p{margin:0;color:#687f75;font-size:11px}.memory-head em{font-style:normal;color:#ffca7c;font-size:12px}.memory-head i{font-style:normal}.memory-detail{border-top:1px solid rgba(255,255,255,.07);padding:22px;display:grid;grid-template-columns:1fr 1fr;gap:12px}.memory-detail>div:not(.timeline){padding:15px;background:#091512;border-radius:10px}.memory-detail small{display:block;color:#5f766d;margin-bottom:7px}.memory-detail del{color:#e79e96}.memory-detail strong{color:#6ce6b3}.memory-detail p{margin:0;color:#a8bbb3;line-height:1.55}.timeline{grid-column:1/-1;display:flex;align-items:center;justify-content:center;padding:18px}.timeline span{color:#566c62;font-size:11px}.timeline span.done{color:#66e1ae}.timeline i{width:70px;height:2px;background:#253a32;margin:0 10px}.timeline .done+i{background:#4dba8e}@media(max-width:850px){.demo-app{grid-template-columns:76px minmax(0,1fr)}}@media(max-width:560px){.demo-app{display:block}.memory-main{padding:0 15px 40px}.memory-detail{grid-template-columns:1fr}.memory-stats{grid-template-columns:1fr 1fr 1fr}.memory-head{grid-template-columns:50px 1fr 20px}.memory-head em{display:none}.timeline i{width:20px}}
header button{cursor:pointer}header button.active{border-color:#62dfa9;background:rgba(77,222,159,.09);color:#73e8b7}
</style>
