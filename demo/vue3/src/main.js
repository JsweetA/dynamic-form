import { createApp } from "vue";

import App from "./App.vue";
import Hyform from "@monorepo/form_arco";
import "@monorepo/form_arco/dist/style.css";
// import Hyform from "../../../index";

createApp(App).use(Hyform).mount("#app");
