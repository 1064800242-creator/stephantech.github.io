<script setup>
import { useRouter, RouterLink } from "vue-router";
import { useAuth } from "../composables/useAuth";

const { userProfile, guestMode, logout } = useAuth();
const router = useRouter();

const handleLogout = async () => {
  await logout();
  router.push("/login");
};
</script>

<template>
  <div class="nav-bar">
    <span class="nav-title">小智写作练习室</span>
    <div class="nav-right">
      <template v-if="guestMode">
        <span class="nav-user nav-guest-label">访客模式</span>
        <button class="nav-logout-btn" @click="handleLogout">登录 / 注册</button>
      </template>
      <template v-else>
        <span v-if="userProfile?.role === 'teacher'" class="nav-badge">Teacher</span>
        <span class="nav-user">{{ userProfile?.name }}</span>
        <RouterLink v-if="userProfile?.role === 'teacher'" to="/dashboard" class="nav-link">Dashboard</RouterLink>
        <RouterLink v-if="userProfile?.role === 'teacher'" to="/practice" class="nav-link">Practice</RouterLink>
        <button class="nav-logout-btn" @click="handleLogout">Logout</button>
      </template>
    </div>
  </div>
</template>
