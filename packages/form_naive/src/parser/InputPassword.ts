import { NInput } from "naive-ui";

export const NInputPassword = Object.assign(NInput, {
  name: "InputPassword",
  props: {
    ...NInput.props,
    type: {
      default: "password",
    },
  },
});
