import { App } from "vue";
import dform from "./index.vue";
import * as componentMap from "./parser";
import { create } from "naive-ui";

export default {
  install(app: App) {
    const naive = create({
      components: Object.values(componentMap),
    });
    app.use(naive);

    app.component("d-form", dform);
  },
};
