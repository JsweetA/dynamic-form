import { VNode } from "vue";

export type Func = (...rest: any) => any;

export interface RuleItem {
  type?: string;
  message?: string;
  trigger?: string | string[];
  required?: boolean;
  validator?: Func;
}

export interface Config {
  /**
   * @description：用于表单校验的键值
   */
  field: string;
  label: string;
  rules?: RuleItem[];
  componentProps?: { [key: string]: any };
  componentEvent?: { [key: string]: Func };
  componentSlots?: { [key: string]: VNode };
  [key: string]: any;
}

export type FormConfig = Config[];
