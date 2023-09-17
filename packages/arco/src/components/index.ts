const generateArcoComp = () => {
	const modules = import.meta.glob("../components/*.vue", {
		eager: true,
		import: "default",
	}) as any;
	console.log(modules, "modules");
	let map: any = {};
	for (let i in modules) {
		map[(modules[i].__name as string).toLocaleLowerCase()] = modules[i];
	}
	console.log(map, "map");

	return map;
};

export { generateArcoComp };
export const componentMap = generateArcoComp();
