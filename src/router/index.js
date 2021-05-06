import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("@/views/home.vue"),
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/about",
    component: () => import("@/views/about.vue"),
  },
  {
    path: "/login",
    component: () => import("@/views/login.vue"),
  },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    console.log("验证");
    if (localStorage.getItem("token")) {
      next();
    } else {
      console.log("没有");
      next("/login");
    }
  } else {
    next();
  }
});
export default router;
