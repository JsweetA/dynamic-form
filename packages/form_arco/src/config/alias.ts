const pre = "";

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
 * @description key-value形式，
 *              其中key为统一配置文件，
 *              value为组件库的属性名
 * @type ： string & object：
 *          为object时，说明这个key在配置文件中的值为数组，而他的value则又是一个aliasUI
 */
export const aliasUI: { [key: string]: string | { [key: string]: string } } = {
  field: "field",
  label: "label",
  rules: {
    trigger: "validateTrigger",
  },
};
