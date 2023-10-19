import { IconPlus } from "@arco-design/web-vue/es/icon";
import { FormConfig } from "@dynamic-form/components/types";
import { h } from "vue";
export const configArray: FormConfig = [
  {
    type: "input",
    label: "原密码",
    field: "password3",
    rules: [
      {
        required: true,
        message: "原密码不能为空 ",
        trigger: ["change", "blur"],
      },
    ],
    /**
     * 组件的属性
     */
    componentProps: {},
    componentEvent: {
      focus: () => {
        console.log(123);
      },
    },
    componentSlots: {
      prefix: h(IconPlus),
      suffix: h(IconPlus),
    },
  },
  {
    type: "password",
    label: "原密码",
    field: "password",
    rules: [
      {
        required: true,
        message: "原密码不能为空 ",
        trigger: ["change", "blur"],
      },
    ],
    // validateTrigger: ["change", "blur"],
  },
  {
    type: "input",
    label: "原密码",
    field: "password2",
    rules: [
      {
        required: true,
        message: "原密码不能为空 ",
        trigger: ["change", "blur"],
      },
    ],
  },
  {
    type: "password",
    label: "新密码",
    field: "newpsw",
    rules: [
      {
        required: true,
        message: "新密码不能为空 ",
        trigger: ["change", "blur"],
      },
    ],
    // validateTrigger: ["change", "blur"],
  },

  {
    type: "password",
    label: "确认密码",
    field: "repsw",

    rules: [
      {
        required: true,
        message: "确认密码不能为空 ",
        trigger: ["change", "blur"],
      },
    ],
    // validateTrigger: ["change", "blur"],
  },
  // {
  // 	type: "slot",
  // 	name: "buttonArea",
  // },
];
