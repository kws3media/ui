import { PasswordInput } from "@kws3/ui";
import PasswordInputDecorator from "./PasswordInput.svelte";

let args = {
  class: "",
  style: "",
  size: "",
  color: "",
  disabled: false,
  show_visibility_switch: true,
  placeholder: "Password",
};

let argTypes = {};

export default {
  title: "Forms/PasswordInput",
  component: PasswordInput,
  args: args,
  argTypes: argTypes,
};

export const Main = {
  name: "Preview",
  args: args,
  argTypes: argTypes,
  props: args,
  decorators: [
    (_, { args }) => ({ Component: PasswordInputDecorator, props: args }),
  ],
};
