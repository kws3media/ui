import dedent from "ts-dedent";
import Version from "~/version.mdx";
import { PasswordInput, PasswordValidator } from "@kws3/ui";
import PasswordInputDecorator from "./PasswordInput.svelte";
import { action } from "@storybook/addon-actions";

let args = {
  class: "",
  style: "",
  size: "",
  color: "",
  disabled: false,
  required: false,
  autocomplete: "on",
  show_field_icon: true,
  field_icon: "lock",
  field_icon_family: "fa",
  show_visibility_switch: true,
  visibility_switch_icon_family: "fa",
  visibility_switch_on_icon: "eye",
  visibility_switch_off_icon: "eye-slash",
  visibility_switch_on_color: "grey",
  visibility_switch_off_color: "grey",
  placeholder: "Password",
  name: "password",
};

export default {
  title: "Forms/PasswordInput",
  component: PasswordInput,
  args: args,

  argTypes: {
    size: {
      control: "select",
    },

    color: {
      control: "select",
    },

    field_icon_family: {
      control: "select",
    },

    visibility_switch_icon_family: {
      control: "select",
    },

    visibility_switch_on_color: {
      control: "select",
    },

    visibility_switch_off_color: {
      control: "select",
    },
  },
};

export const PasswordInput = {
  render: (args) => ({
    Component: PasswordInputDecorator,
    props: args,
  }),

  name: "PasswordInput",
  args: args,
};
