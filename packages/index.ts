import { App } from "vue";
import dform from "./form/index.vue";
export default {
	install(app: App) {
		app.component("Hy-form", dform);
	},
};
