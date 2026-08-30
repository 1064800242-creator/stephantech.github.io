<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const showFeedback = ref(false);
const submitted = ref(false);
const role = ref("学生");
const feedbackText = ref("");
const submitFeedback = () => { if (!feedbackText.value.trim()) return; localStorage.setItem("twi-demo-feedback", JSON.stringify({ role: role.value, text: feedbackText.value, at: new Date().toISOString() })); submitted.value = true; };
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
    <button class="feedback-link" @click="showFeedback = true">↗ <span>体验反馈</span></button>
    <div class="demo-profile"><div>A</div><p><strong>Student A</strong><span>距离考试 30 天</span></p></div>
    <div v-if="showFeedback" class="feedback-overlay" @click.self="showFeedback = false; submitted = false"><div class="feedback-modal"><button class="feedback-close" @click="showFeedback = false; submitted = false">×</button><template v-if="!submitted"><span class="feedback-kicker">BETA FEEDBACK</span><h2>告诉我你的真实感受</h2><p class="feedback-intro">这是内测版本，你的反馈会直接影响下一版训练流程。</p><label>你的身份<select v-model="role"><option>学生</option><option>老师</option><option>家长</option><option>其他</option></select></label><label>体验反馈<textarea v-model="feedbackText" placeholder="哪一步最有价值、最不清楚，或希望增加什么？"></textarea></label><button class="feedback-submit" :disabled="!feedbackText.trim()" @click="submitFeedback">提交反馈</button></template><template v-else><h2>感谢你的反馈！</h2><p class="feedback-intro">内容已记录，会用于下一轮 Demo 迭代。</p></template></div></div>
  </aside>
</template>

<style scoped>
.demo-sidebar { height:100vh; position:sticky; top:0; padding:26px 18px 20px; border-right:1px solid rgba(199,255,230,.1); background:#091512; display:flex; flex-direction:column; color:#effbf6; }
.demo-brand { color:#f6fff9; background:none; border:0; font-size:22px; font-weight:900; letter-spacing:-.04em; cursor:pointer; text-align:left; padding:4px 10px 28px; }.demo-brand span{margin-left:7px;color:#5ce4aa;font-size:9px;letter-spacing:.08em;vertical-align:top}
nav{display:flex;flex-direction:column;gap:7px}.demo-side-link{width:100%;border:0;background:transparent;color:#789087;display:grid;grid-template-columns:26px 1fr auto;align-items:center;text-align:left;padding:12px 13px;border-radius:10px;cursor:pointer}.demo-side-link i{font-style:normal}.demo-side-link span{font-size:13px;font-weight:700}.demo-side-link b{background:#223b32;color:#75e8b8;padding:2px 7px;border-radius:99px;font-size:10px}.demo-side-link:hover,.demo-side-link.active{color:#eafff5;background:#12241e}.demo-side-link.active{box-shadow:inset 3px 0 #5ce4aa}
.demo-profile{margin-top:auto;display:flex;align-items:center;gap:10px;padding:15px 10px 4px;border-top:1px solid rgba(255,255,255,.08)}.demo-profile>div{width:34px;height:34px;display:grid;place-items:center;border-radius:50%;background:#bbf5dc;color:#0a2b1e;font-weight:900}.demo-profile p{margin:0;display:flex;flex-direction:column;gap:3px}.demo-profile strong{font-size:12px}.demo-profile span{color:#63786f;font-size:10px}
@media(max-width:850px){.demo-sidebar{padding:22px 10px}.demo-brand{font-size:18px;padding-left:6px}.demo-brand span,.demo-side-link span,.demo-side-link b,.demo-profile p{display:none}.demo-side-link{grid-template-columns:1fr;text-align:center}.demo-profile{justify-content:center}}
@media(max-width:560px){.demo-sidebar{display:none}}
.feedback-link{border:1px solid rgba(98,224,170,.25);background:transparent;color:#69dbaa;border-radius:9px;padding:10px 13px;text-align:left;cursor:pointer;margin-top:18px}.feedback-link span{font-size:12px;font-weight:700;margin-left:7px}.feedback-overlay{position:fixed;inset:0;z-index:60;background:rgba(0,0,0,.72);display:grid;place-items:center;padding:20px}.feedback-modal{width:min(470px,100%);background:#0c1b17;border:1px solid #315347;border-radius:16px;padding:28px;color:#effbf6;position:relative}.feedback-close{position:absolute;right:14px;top:10px;background:transparent;border:0;color:#9ab0a5;font-size:24px}.feedback-kicker{color:#61e0aa;font-size:10px;font-weight:800;letter-spacing:.13em}.feedback-modal h2{margin:8px 0;font-size:24px}.feedback-intro{color:#839a90;line-height:1.55;font-size:13px}.feedback-modal label{display:flex;flex-direction:column;gap:6px;color:#a9bdb4;font-size:12px;margin-top:15px}.feedback-modal select,.feedback-modal textarea{border:1px solid #29463b;background:#07110f;color:#e6f3ed;border-radius:8px;padding:10px;font:inherit}.feedback-modal textarea{min-height:100px;resize:vertical}.feedback-submit{margin-top:18px;border:0;background:#67e5af;color:#062218;border-radius:8px;padding:11px 16px;font-weight:800}.feedback-submit:disabled{opacity:.35}
</style>
