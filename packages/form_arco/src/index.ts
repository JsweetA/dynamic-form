import { App } from "vue";
import dform from "./index.vue";

export default {
  install(app: App) {
    app.component("d-form", dform);
  },
};
