export const aliasComp = {
  form: "Form",
  formItem: "FormItem",
  checkbox: "Checkbox",
  date: "DatePicker",
  input: "Input",
  password: "InputPassword",
  number: "InputNumber",
  radio: "Radio",
  select: "Select",
};

const aliasUI: { [key: string]: string } = {
  field: "field",
  label: "label",
};
/**
 * 适配UI库:有些组件库的不是label和field，有些的是prop和label(vk)组件库。这一层就是用来做这个的
 */
export const toAdaptUI = (config: any[]) => {
  for (const item of config) {
    for (const key in aliasUI) {
      item[aliasUI[key]] = item[key];
      if (aliasUI[key] !== key) delete item[key];
    }
  }
  return config;
};
