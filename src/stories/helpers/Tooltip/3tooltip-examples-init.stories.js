import { Meta, Story } from "@storybook/addon-svelte-csf";
import dedent from "ts-dedent";
import Version from "~/version.mdx";
import InitVariations from "./InitVariations.svelte";

export default {
  title: "Helpers/Tooltips/2. Examples/2. Variations",
};

export const $2Variations = {
  render: (args) => ({
    Component: InitVariations,
  }),

  name: "2. Variations",
  args: {},
};
