import { Meta, Story } from "@storybook/addon-svelte-csf";
import dedent from "ts-dedent";
import Version from "~/version.mdx";
import SmartFormExample from "./SmartFormExample.svelte";
import CustomValidators from "./CustomValidators.svelte";

export default {
  title: "Utils/2. Examples/SmartForm",
};

export const SmartFormExample = {
  render: (args) => ({
    Component: SmartFormExample,
  }),

  name: "SmartForm Example",
  args: {},
};

export const CustomValidatorExample = {
  render: (args) => ({
    Component: CustomValidators,
  }),

  name: "Custom Validator Example",
  args: {},
};
