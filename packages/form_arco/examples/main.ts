import { createApp } from "vue";
import App from "./App.vue";

import HyFormUmd from "../src/index";
// import HyFormUmd from "../dist/form_arco.mjs";
import "../dist/style.css";

const app = createApp(App);
app.use(HyFormUmd);
app.mount("#app");
