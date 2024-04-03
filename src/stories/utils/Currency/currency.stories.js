import { Meta, Story } from "@storybook/addon-svelte-csf";
import dedent from "ts-dedent";
import Version from "~/version.mdx";
import Currency from "./Currency.svelte";

export default {
  title: "Utils/2. Examples/Currency",
};

export const Currency = {
  render: (args) => ({
    Component: Currency,
  }),

  name: "Currency",
  args: {},
};
