export const toAdaptUI = (config: any[], aliasUI: any) => {
  for (const item of config) {
    for (const key in aliasUI) {
      item[aliasUI[key]] = item[key];
      if (aliasUI[key] !== key) delete item[key];
    }
  }
  return config;
};
