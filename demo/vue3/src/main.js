import { createApp } from "vue";

import App from "./App.vue";
import Hyform from "@monorepo/arco";
import "@monorepo/arco/dist/style.css";
// import Hyform from "../../../index";

createApp(App).use(Hyform).mount("#app");
