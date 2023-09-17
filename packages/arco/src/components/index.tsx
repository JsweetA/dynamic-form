import { h, defineComponent } from "vue";
import * as arco from "@arco-design/web-vue";

const method = {
	onChange(e: any) {
		console.log(e, "onchange");
	},
};

export default defineComponent({
	props: {
		type: null,
	},
	setup(props) {
		const { type } = props;
		// 返回渲染函数
		return () =>
			h((arco as any)[type || "Input"], {
				placeholder: "123",
				...method,
			});
		// return () =>
		// 	h(
		// 		"button",
		// 		{
		// 			onClick(event: any) {
		// 				/* ... */
		// 				console.log(event);
		// 			},
		// 		},
		// 		"click me",
		// 	);
	},
});
