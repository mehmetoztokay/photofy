import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/style.css";

import appHeader from "@/components/Shared/appHeader";
import appFooter from "@/components/Shared/appFooter";

const app = createApp(App);
app.use(router);

app.component("appHeader", appHeader);
app.component("appFooter", appFooter);

app.mount("#app");
