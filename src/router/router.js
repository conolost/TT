import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../views/main-page.vue";
import whoPage from "../views/who-page.vue";
import whatPage from "../views/what-page.vue";
import wherePage from "../views/where-page.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/who", component: whoPage },
  { path: "/what", component: whatPage },
  { path: "/where", component: wherePage },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
