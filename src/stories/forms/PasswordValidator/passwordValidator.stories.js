import {
  Story,
  Preview,
  Meta,
  ArgsTable,
  Source,
  Description,
  Canvas,
} from "@storybook/addon-svelte-csf";
import dedent from "ts-dedent";
import Version from "~/version.mdx";
import { PasswordValidator } from "@kws3/ui";
import PasswordValidatorDecorator from "./PasswordValidator.svelte";
import { action } from "@storybook/addon-actions";

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

export default {
  title: "Forms/PasswordValidator",
  component: PasswordValidator,
  args: args,
};

export const PasswordValidator = {
  render: (args) => ({
    Component: PasswordValidatorDecorator,
    props: args,
  }),

  name: "PasswordValidator",
  args: args,
};
