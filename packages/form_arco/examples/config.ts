import { IconPlus } from "@arco-design/web-vue/es/icon";
import { FormConfig } from "@dynamic-form/components/types";
import { h } from "vue";

export const configArray: FormConfig = [
  {
    type: "input",
    label: "输入框",
    field: "input",
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
    label: "密码框",
    field: "password",
    rules: [
      {
        required: true,
        message: "原密码不能为空 ",
        trigger: ["change", "blur"],
      },
    ],
  },
  {
    type: "select",
    label: "下拉框",
    field: "select",
    rules: [
      {
        required: true,
        message: "原密码不能为空 ",
        trigger: ["change", "blur"],
      },
    ],
    componentProps: {
      options: [
        {
          value: "beijing",
          label: "Beijing",
          other: "extra",
        },
        {
          value: "shanghai",
          label: "Shanghai",
          other: "extra",
        },
        {
          value: "guangzhou",
          label: "Guangzhou",
          other: "extra",
        },
        {
          value: "chengdu",
          label: "Chengdu",
          other: "extra",
        },
      ],
    },
  },
  {
    type: "radio",
    label: "单选按钮",
    field: "radio",
    rules: [
      {
        required: true,
        message: "新密码不能为空 ",
        trigger: ["change", "blur"],
      },
    ],
    componentProps: {
      options: [
        {
          value: "beijing",
          label: "Beijing",
          other: "extra",
        },
        {
          value: "shanghai",
          label: "Shanghai",
          other: "extra",
        },
        {
          value: "guangzhou",
          label: "Guangzhou",
          other: "extra",
        },
        {
          value: "chengdu",
          label: "Chengdu",
          other: "extra",
        },
      ],
    },
  },
  {
    type: "checkbox",
    label: "复选框",
    field: "checkbox",
    rules: [
      {
        required: true,
        message: "123132 ",
        trigger: ["change", "blur"],
      },
    ],
    componentProps: {
      options: [
        {
          value: "beijing",
          label: "Beijing",
          other: "extra",
        },
        {
          value: "shanghai",
          label: "Shanghai",
          other: "extra",
        },
        {
          value: "guangzhou",
          label: "Guangzhou",
          other: "extra",
        },
        {
          value: "chengdu",
          label: "Chengdu",
          other: "extra",
        },
      ],
    },
  },
];
