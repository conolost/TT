import { createApp } from "vue";
import router from "./router/router";
// import barba from "@barba/core";

import App from "./App.vue";
import "@/assets/styles/main.scss";

createApp(App).use(router).mount("#app");
