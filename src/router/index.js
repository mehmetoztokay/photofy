import { createRouter, createWebHashHistory } from "vue-router";
import store from "../store";

const routes = [
  {
    name: "Home",
    path: "/",
    component: () => import("@/views/Home"),
  },
  {
    name: "Register",
    path: "/register",
    component: () => import("@/views/Register"),
  },
  {
    name: "Login",
    path: "/login",
    component: () => import("@/views/Login"),
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

router.beforeEach((to, _, next) => {
  // const authRequiredPages = [];
  const authPages = ["Login", "Register"];
  const _isAuthenticated = store.getters._isAuthenticated;

  if (authPages.indexOf(to.name) > -1 && _isAuthenticated) next(false);
  else next();
});

export default router;
