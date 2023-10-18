import { createApp } from "vue";
import App from "./App.vue";

import HyFormUmd from "../src";
import "@arco-design/web-vue/dist/arco.css";

const app = createApp(App);
app.use(HyFormUmd);
app.mount("#app");
