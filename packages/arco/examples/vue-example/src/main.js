import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Hyform from "@arco/core";
import "@arco/core/dist/style.css";

createApp(App)
	.use(Hyform)
	.mount("#app");
