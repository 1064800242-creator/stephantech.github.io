<script setup>
import { ref } from "vue";
import { useRouter, RouterLink } from "vue-router";
import { useAuth } from "../composables/useAuth";
import wechatContact from "../assets/wechat-contact.jpg";

const { userProfile, guestMode, logout, changePassword } = useAuth();
const router = useRouter();

const handleLogout = async () => {
  await logout();
  router.push("/login");
};

const showChangePw = ref(false);
const currentPw = ref("");
const newPw = ref("");
const confirmPw = ref("");
const changePwError = ref("");
const changePwMsg = ref("");
const changePwLoading = ref(false);
const showContact = ref(false);

const openChangePw = () => {
  currentPw.value = "";
  newPw.value = "";
  confirmPw.value = "";
  changePwError.value = "";
  changePwMsg.value = "";
  showChangePw.value = true;
};

const handleChangePw = async () => {
  changePwError.value = "";
  changePwMsg.value = "";
  if (!currentPw.value || !newPw.value || !confirmPw.value) {
    changePwError.value = "请填写所有字段。";
    return;
  }
  if (newPw.value.length < 6) {
    changePwError.value = "新密码至少需要 6 位。";
    return;
  }
  if (newPw.value !== confirmPw.value) {
    changePwError.value = "两次输入的新密码不一致。";
    return;
  }
  changePwLoading.value = true;
  try {
    await changePassword(currentPw.value, newPw.value);
    changePwMsg.value = "密码已更新。";
    currentPw.value = "";
    newPw.value = "";
    confirmPw.value = "";
  } catch (e) {
    if (e.code === "auth/wrong-password" || e.code === "auth/invalid-credential") {
      changePwError.value = "当前密码不正确。";
    } else if (e.code === "auth/too-many-requests") {
      changePwError.value = "尝试过多，请稍后再试。";
    } else {
      changePwError.value = "修改失败，请重试。";
    }
  } finally {
    changePwLoading.value = false;
  }
};
</script>

<template>
  <div class="nav-bar">
    <span class="nav-title">TOEFL Writing Improver</span>
    <div class="nav-right">
      <template v-if="guestMode">
        <span class="nav-user nav-guest-label">访客模式</span>
        <button class="nav-contact-btn" @click="showContact = true">联系老师</button>
        <button class="nav-logout-btn" @click="handleLogout">登录 / 注册</button>
      </template>
      <template v-else>
        <span v-if="userProfile?.role === 'teacher'" class="nav-badge">Teacher</span>
        <span class="nav-user">{{ userProfile?.name }}</span>
        <RouterLink v-if="userProfile?.role === 'teacher'" to="/dashboard" class="nav-link">Dashboard</RouterLink>
        <RouterLink v-if="userProfile?.role === 'teacher'" to="/practice" class="nav-link">Practice</RouterLink>
        <RouterLink v-if="userProfile?.role !== 'teacher'" to="/practice" class="nav-link">练习</RouterLink>
        <RouterLink v-if="userProfile?.role !== 'teacher'" to="/learning-coach" class="nav-link nav-coach-link">AI 学习教练 · Beta</RouterLink>
        <RouterLink v-if="userProfile?.role !== 'teacher'" to="/records" class="nav-link">我的记录</RouterLink>
        <button class="nav-contact-btn" @click="showContact = true">开通正式版</button>
        <button class="nav-logout-btn" @click="openChangePw">修改密码</button>
        <button class="nav-logout-btn" @click="handleLogout">Logout</button>
      </template>

      <div v-if="showContact" class="modal-overlay" @click.self="showContact = false">
        <div class="modal-box contact-box">
          <button class="contact-close" @click="showContact = false">×</button>
          <h2 class="modal-title">联系老师，开通正式版</h2>
          <p class="contact-copy">想让系统分析你的真实作文并生成个性化训练路径？添加微信，了解正式版开通方式。</p>
          <img :src="wechatContact" alt="Stephanie 文超微信二维码" class="wechat-qr">
          <p class="contact-tip">微信扫码添加好友</p>
        </div>
      </div>

      <!-- Change Password Modal -->
      <div v-if="showChangePw" class="modal-overlay" @click.self="showChangePw = false">
        <div class="modal-box">
          <h2 class="modal-title">修改密码</h2>
          <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:12px">
            <input v-model="currentPw" class="login-input" type="password" placeholder="当前密码" autocomplete="current-password">
            <input v-model="newPw" class="login-input" type="password" placeholder="新密码（至少 6 位）" autocomplete="new-password">
            <input v-model="confirmPw" class="login-input" type="password" placeholder="确认新密码" autocomplete="new-password">
          </div>
          <p v-if="changePwMsg" style="color:#22c55e;font-size:13px;margin-bottom:8px">{{ changePwMsg }}</p>
          <p v-if="changePwError" class="login-error">{{ changePwError }}</p>
          <div class="modal-actions">
            <button class="modal-btn modal-btn-cancel" @click="showChangePw = false">取消</button>
            <button class="modal-btn modal-btn-confirm" :disabled="changePwLoading" @click="handleChangePw">
              {{ changePwLoading ? "保存中…" : "确认修改" }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.nav-contact-btn{border:1px solid #2a9d78;background:transparent;color:#55dca7;border-radius:6px;padding:5px 9px;cursor:pointer;font-size:12px}
.contact-box{position:relative;text-align:center;max-width:360px}.contact-close{position:absolute;right:14px;top:10px;border:0;background:transparent;font-size:24px;color:#9ab0a5;cursor:pointer}.contact-copy{color:#7f978c;line-height:1.6;font-size:13px}.wechat-qr{display:block;width:230px;height:230px;object-fit:cover;margin:14px auto 8px;border-radius:8px}.contact-tip{color:#54dda5;font-size:12px}
</style>
