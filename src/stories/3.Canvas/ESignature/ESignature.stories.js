import Decorator from "./ESignature.svelte";
import { ESignature } from "@kws3/ui";

let args = {
  width: "520px",
  height: "170px",
  background_image: "",
  readonly: false,
  disabled: false,
  control_position: "center",
};

export default {
  title: "Canvas/ESignature",
  component: ESignature,
  args: args,
  argTypes: {},
};

export const Main = {
  name: "Preview",
  args: args,
  argTypes: {},
  decorators: [(_, { args }) => ({ Component: Decorator, props: args })],
};
