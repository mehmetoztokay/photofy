import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/style.css";

import appHeader from "@/components/Shared/appHeader";

const app = createApp(App);
app.use(router);

app.component("appHeader", appHeader);

app.mount("#app");
