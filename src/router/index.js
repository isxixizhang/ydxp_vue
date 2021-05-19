import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

const routes = [
  {
    path: "/about",
    name: "About",
    component: () => import( "../views/About.vue"),
    meta: {title: '关于我们'}
  },
  {
    path: "/signUp",
    name: "signUp",
    component: () => import( "../views/register/signUp.vue"),
    meta: {title: '注册'}
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.VUE_APP_BASE_API,
  routes,
});

export default router;
