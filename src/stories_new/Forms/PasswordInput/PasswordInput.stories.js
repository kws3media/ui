import { PasswordInput } from "@kws3/ui";
import PasswordInputDecorator from "./PasswordInput.svelte";

let args = {
  class: "",
  style: "",
  size: "",
  color: "",
  disabled: false,
  has_visibility_switcher: true,
  placeholder: "Password",
};

let argTypes = {};

export default {
  title: "Forms/PasswordInput",
  component: PasswordInput,
  decorators: [() => PasswordInputDecorator],
  args: args,
  argTypes: argTypes,
};

export const Main = {
  name: "Preview",
  tags: ["isHidden"],
  args: args,
  argTypes: argTypes,
  props: args,
};
