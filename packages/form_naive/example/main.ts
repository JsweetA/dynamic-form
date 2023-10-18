import { createApp } from "vue";
import App from "./App.vue";

import dform from "../src";

const app = createApp(App);
app.use(dform);

app.mount("#app");
