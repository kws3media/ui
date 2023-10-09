import Decorator from "./ESignature.svelte";

let args = {
  width: "520px",
  height: "170px",
  background_image: "",
  readonly: false,
  disabled: false,
  control_position: "center"
};

export default {
  title: "Canvas/ESignature",
  component: Decorator,
  args: args,
  argTypes: {},
};

export const Main = {
  args: args,
  argTypes: {},
};
