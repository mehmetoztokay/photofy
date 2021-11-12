import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import "./assets/style.css";

import appHeader from "@/components/Shared/appHeader";
import appFooter from "@/components/Shared/appFooter";
import store from "./store";

const app = createApp(App);
app.use(router);
app.use(store);
app.config.globalProperties.$axios = axios;

app.component("appHeader", appHeader);
app.component("appFooter", appFooter);

app.mount("#app");
