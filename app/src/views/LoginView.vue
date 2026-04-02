<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuth } from "../composables/useAuth";

const { login, register, continueAsGuest, userProfile } = useAuth();
const router = useRouter();

const tab = ref("login");
const name = ref("");
const email = ref("");
const password = ref("");
const inviteCode = ref("");
const errorMsg = ref("");
const loading = ref(false);

const handleLogin = async () => {
  errorMsg.value = "";
  loading.value = true;
  try {
    await login(email.value, password.value);
    router.push(userProfile.value?.role === "teacher" ? "/dashboard" : "/practice");
  } catch (e) {
    errorMsg.value = friendlyError(e.code);
  } finally {
    loading.value = false;
  }
};

const handleRegister = async () => {
  errorMsg.value = "";
  if (!name.value.trim()) { errorMsg.value = "请填写姓名。"; return; }
  if (!inviteCode.value.trim()) { errorMsg.value = "请填写邀请码。"; return; }
  loading.value = true;
  try {
    await register(email.value, password.value, name.value.trim(), inviteCode.value.trim());
    router.push("/practice");
  } catch (e) {
    errorMsg.value = friendlyError(e.code);
  } finally {
    loading.value = false;
  }
};

const handleGuest = () => {
  continueAsGuest();
  router.push("/practice");
};

const friendlyError = (code) => {
  switch (code) {
    case "auth/invalid-email": return "邮箱格式不正确。";
    case "auth/user-not-found":
    case "auth/wrong-password":
    case "auth/invalid-credential": return "邮箱或密码错误。";
    case "auth/email-already-in-use": return "该邮箱已注册。";
    case "auth/weak-password": return "密码至少需要 6 位。";
    case "auth/too-many-requests": return "登录尝试过多，请稍后再试。";
    case "auth/invalid-code": return "邀请码无效或已被使用，请联系老师获取新邀请码。";
    default: return "操作失败，请重试。";
  }
};
</script>

<template>
  <div class="login-page">
    <div class="login-card">
      <h1 class="login-title">小智写作练习室</h1>

      <div class="login-tabs">
        <button class="login-tab" :class="{ active: tab === 'login' }" @click="tab = 'login'; errorMsg = ''">登录</button>
        <button class="login-tab" :class="{ active: tab === 'register' }" @click="tab = 'register'; errorMsg = ''">注册</button>
      </div>

      <!-- Login -->
      <form v-if="tab === 'login'" class="login-form" @submit.prevent="handleLogin">
        <label class="login-label">邮箱</label>
        <input v-model="email" class="login-input" type="email" placeholder="your@email.com" required autocomplete="username">
        <label class="login-label">密码</label>
        <input v-model="password" class="login-input" type="password" placeholder="••••••" required autocomplete="current-password">
        <p v-if="errorMsg" class="login-error">{{ errorMsg }}</p>
        <button class="login-submit" type="submit" :disabled="loading">{{ loading ? "登录中…" : "登录" }}</button>
      </form>

      <!-- Register (students only, requires invite code) -->
      <form v-else class="login-form" @submit.prevent="handleRegister">
        <label class="login-label">姓名</label>
        <input v-model="name" class="login-input" type="text" placeholder="你的姓名" required autocomplete="name">
        <label class="login-label">邮箱</label>
        <input v-model="email" class="login-input" type="email" placeholder="your@email.com" required autocomplete="username">
        <label class="login-label">密码</label>
        <input v-model="password" class="login-input" type="password" placeholder="至少 6 位" required autocomplete="new-password">
        <label class="login-label">老师邀请码</label>
        <input
          v-model="inviteCode"
          class="login-input login-input-code"
          type="text"
          placeholder="向老师获取邀请码"
          required
          maxlength="8"
          autocomplete="off"
          spellcheck="false"
        >
        <p class="login-hint">邀请码由老师生成，每个码只能使用一次。</p>
        <p v-if="errorMsg" class="login-error">{{ errorMsg }}</p>
        <button class="login-submit" type="submit" :disabled="loading">{{ loading ? "注册中…" : "注册" }}</button>
      </form>

      <div class="login-divider"><span>或</span></div>
      <button class="guest-btn" @click="handleGuest">以访客身份继续（不保存记录）</button>
    </div>
  </div>
</template>
