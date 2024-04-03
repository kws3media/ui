import { Meta, Story } from "@storybook/addon-svelte-csf";
import dedent from "ts-dedent";
import Version from "~/version.mdx";
import DataAttributes from "./DataAttributes.svelte";

export default {
  title: "Helpers/Tooltips/2. Examples/1. Data Attributes",
};

export const $1DataAttributes = {
  render: (args) => ({
    Component: DataAttributes,
  }),

  name: "1. Data Attributes",
  args: {},
};
