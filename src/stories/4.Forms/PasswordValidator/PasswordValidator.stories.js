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
  args: args,
  argTypes: argTypes,
};

export const Main = {
  name: "Preview",
  args: args,
  argTypes: argTypes,
  props: args,
  decorators: [
    (_, { args }) => ({ Component: PasswordValidatorDecorator, props: args }),
  ],
};
