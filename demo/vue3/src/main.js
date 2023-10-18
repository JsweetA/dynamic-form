import { createApp } from "vue";

import App from "./App.vue";
import form_arco from "@dynamic-form/form_arco";
import "@dynamic-form/form_arco/dist/style.css";
// import Hyform from "../../../index";

createApp(App).use(form_arco).mount("#app");
