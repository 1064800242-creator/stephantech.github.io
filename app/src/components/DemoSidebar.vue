<script setup>
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const items = [
  { path: "/demo-practice", icon: "✎", label: "写作练习" },
  { path: "/learning-coach", icon: "◎", label: "AI 学习教练" },
  { path: "/demo-records", icon: "▤", label: "我的记录" },
  { path: "/mistake-notebook", icon: "◇", label: "智能学习记忆", badge: "3" },
];
</script>

<template>
  <aside class="demo-sidebar">
    <button class="demo-brand" @click="router.push('/')">TWI<span>beta</span></button>
    <nav>
      <button v-for="item in items" :key="item.path" :class="['demo-side-link', { active: route.path === item.path || (item.path === '/learning-coach' && route.path.startsWith('/learning-coach')) }]" @click="router.push(item.path)">
        <i>{{ item.icon }}</i><span>{{ item.label }}</span><b v-if="item.badge">{{ item.badge }}</b>
      </button>
    </nav>
    <div class="demo-profile"><div>A</div><p><strong>Student A</strong><span>距离考试 30 天</span></p></div>
  </aside>
</template>

<style scoped>
.demo-sidebar { height:100vh; position:sticky; top:0; padding:26px 18px 20px; border-right:1px solid rgba(199,255,230,.1); background:#091512; display:flex; flex-direction:column; color:#effbf6; }
.demo-brand { color:#f6fff9; background:none; border:0; font-size:22px; font-weight:900; letter-spacing:-.04em; cursor:pointer; text-align:left; padding:4px 10px 28px; }.demo-brand span{margin-left:7px;color:#5ce4aa;font-size:9px;letter-spacing:.08em;vertical-align:top}
nav{display:flex;flex-direction:column;gap:7px}.demo-side-link{width:100%;border:0;background:transparent;color:#789087;display:grid;grid-template-columns:26px 1fr auto;align-items:center;text-align:left;padding:12px 13px;border-radius:10px;cursor:pointer}.demo-side-link i{font-style:normal}.demo-side-link span{font-size:13px;font-weight:700}.demo-side-link b{background:#223b32;color:#75e8b8;padding:2px 7px;border-radius:99px;font-size:10px}.demo-side-link:hover,.demo-side-link.active{color:#eafff5;background:#12241e}.demo-side-link.active{box-shadow:inset 3px 0 #5ce4aa}
.demo-profile{margin-top:auto;display:flex;align-items:center;gap:10px;padding:15px 10px 4px;border-top:1px solid rgba(255,255,255,.08)}.demo-profile>div{width:34px;height:34px;display:grid;place-items:center;border-radius:50%;background:#bbf5dc;color:#0a2b1e;font-weight:900}.demo-profile p{margin:0;display:flex;flex-direction:column;gap:3px}.demo-profile strong{font-size:12px}.demo-profile span{color:#63786f;font-size:10px}
@media(max-width:850px){.demo-sidebar{padding:22px 10px}.demo-brand{font-size:18px;padding-left:6px}.demo-brand span,.demo-side-link span,.demo-side-link b,.demo-profile p{display:none}.demo-side-link{grid-template-columns:1fr;text-align:center}.demo-profile{justify-content:center}}
@media(max-width:560px){.demo-sidebar{display:none}}
</style>
