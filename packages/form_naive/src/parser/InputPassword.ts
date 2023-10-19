import { NInput } from "naive-ui";

export const NInputPassword = {
  ...NInput,
  name: "InputPassword",
  props: {
    ...NInput.props,
    type: {
      default: "password",
    },
  },
};
