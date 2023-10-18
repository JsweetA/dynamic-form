import { NForm } from "naive-ui";

Object.assign(NForm, {
  props: { ...NForm.props, "label-placement": { default: "left" } },
});
export { NForm };
