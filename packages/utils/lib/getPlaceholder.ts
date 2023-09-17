export default function getPlaceholder(item: any) {
	const { label, type } = item;
	let placeholder = "请输入";

	const empty = ["date", "radio", "checkbox"];
	const select = ["select"];

	select.includes(type) && (placeholder = "请选择");
	empty.includes(type) && (placeholder = "");

	return placeholder.length ? `${placeholder}${label}` : "";
}
