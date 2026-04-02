import { createRouter, createWebHashHistory } from "vue-router";
import { user, userProfile, guestMode, authReadyPromise } from "../composables/useAuth";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", redirect: "/practice" },
    {
      path: "/login",
      component: () => import("../views/LoginView.vue"),
      meta: { public: true },
    },
    {
      path: "/practice",
      component: () => import("../views/PracticeView.vue"),
      meta: { requiresAuth: true, allowGuest: true },
    },
    {
      path: "/dashboard",
      component: () => import("../views/DashboardView.vue"),
      meta: { requiresAuth: true, teacherOnly: true },
    },
  ],
});

router.beforeEach(async (to) => {
  await authReadyPromise;

  const loggedIn = !!user.value;
  const isGuest = guestMode.value;
  const isTeacher = userProfile.value?.role === "teacher";

  // "/" root — send to appropriate home
  if (to.path === "/") {
    if (!loggedIn && !isGuest) return "/login";
    return isTeacher ? "/dashboard" : "/practice";
  }

  if (to.meta.requiresAuth && !loggedIn && !isGuest) return "/login";
  if (to.meta.teacherOnly && !isTeacher) return "/practice";

  // After login, redirect to role home
  if (to.path === "/login" && (loggedIn || isGuest)) {
    return isTeacher ? "/dashboard" : "/practice";
  }
});

export default router;
