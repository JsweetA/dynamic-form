import { createApp } from "vue";

import App from "./App.vue";

import HyFormUmd from "../../index";
// import HyFormUmd from "../../dist/Hy-form.mjs";
// import "../../dist/style.css";

const app = createApp(App);
app.use(HyFormUmd);
app.mount("#app");
