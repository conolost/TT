import VueRouter from "vue-router";

import Home from "../App.vue";
import whoPage from "../views/who-page.vue";
import whatPage from "../views/what-page.vue";
import wherePage from "../views/where-page.vue";

export default new VueRouter({
  history: VueRouter.createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/who", component: whoPage },
    { path: "/what", component: whatPage },
    { path: "/where", component: wherePage },
  ],
});
