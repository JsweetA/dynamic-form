const pre = "N";

export const aliasComp = {
  form: pre + "Form",
  formItem: pre + "FormItem",
  checkbox: pre + "Checkbox",
  date: pre + "DatePicker",
  input: pre + "Input",
  password: pre + "InputPassword",
  number: pre + "InputNumber",
  radio: pre + "Radio",
  select: pre + "Select",
};
/**
 * 适配UI库:有些组件库的不是label和field，有些的是prop和label(vk)组件库。这一层就是用来做这个的
 */
export const aliasUI: { [key: string]: string } = {
  field: "field",
  label: "label",
};
