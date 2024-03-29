import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import daybookRouter from "@/modules/daybook/router";
import authRouter from "@/modules/auth/router";
import isAuthenticatedGuard from "@/modules/auth/router/auth-guard";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",

    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/daybook",
    beforeEnter: [isAuthenticatedGuard],
    ...daybookRouter,
  },
  {
    path: "/auth",
    name: "auth",
    ...authRouter,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
