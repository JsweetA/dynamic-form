import { createApp } from "vue";

import App from "./App.vue";
import Hyform from "@hy-form/arco";
import "@hy-form/arco/dist/style.css";
// import Hyform from "../../../index";

createApp(App).use(Hyform).mount("#app");
