/**
 * @param item : 配置项
 * @description ： 解析配置项中的事件
 */
export default function event(item: any = {}) {
	const obj: any = {};
	for (let i in item) {
		if (typeof item[i] === "function") {
			obj[i] = item[i];
		}
	}

	return obj;
}
