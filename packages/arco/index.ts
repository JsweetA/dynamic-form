import { App } from "vue";
import dform from "./src/index.vue";
export default {
	install(app: App) {
		app.component("Hy-form", dform);
	},
};
