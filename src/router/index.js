import {createRouter, createWebHashHistory} from "vue-router";

const routes = [
  {
    name: "HomePage",
    path: "/",
    component: () => import("@/views/Home"),
  },
  {
    name: "Register",
    path: "/register",
    component: () => import("@/views/Register"),
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
