import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/formulario",
    name: "Formulario",
    component: () => import("../views/Formulario.vue"),
  },

];

const router = new VueRouter({
  mode: "history",

  base: "/",
  routes,
});

export default router;
