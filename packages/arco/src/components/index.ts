const generateArcoComp = () => {
  const modules = import.meta.glob("../components/*.vue", {
    eager: true,
    import: "default",
  }) as any;
  const map: any = {};
  for (const i in modules) {
    map[(modules[i].__name as string).toLocaleLowerCase()] = modules[i];
  }
  console.log(map, "generateArcoComp");
  return map;
};

export { generateArcoComp };
export const componentMap = generateArcoComp();
