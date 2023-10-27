import { PasswordValidator } from "@kws3/ui";
import PasswordValidatorDecorator from "./PasswordValidator.svelte";

let args = {
  password: "",
  compact: true,
  min: 8,
  lower: true,
  upper: true,
  digit: true,
  special: true,
  custom_rules: [],
  class: "",
  style: "",
};

let argTypes = {};

export default {
  title: "Forms/PasswordValidator",
  component: PasswordValidator,
  decorators: [() => PasswordValidatorDecorator],
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
