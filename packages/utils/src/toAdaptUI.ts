/**
 * @description : 适配UI库:有些组件库的不是label和field，有些的是prop和label(vk)组件库。这一层就是用来做这个的
 */
export const toAdaptUI = (config: any[], aliasUI: any): any[] => {
  for (const key in aliasUI) {
    const alias = aliasUI[key];
    for (const item of config) {
      if (typeof alias !== "object") {
        item[alias] = item[key];
        if (alias !== key) delete item[key];
      } else toAdaptUI(item[key], alias);
    }
  }
  return config;
};
