import { Meta, Story } from "@storybook/addon-svelte-csf";
import dedent from "ts-dedent";
import Version from "~/version.mdx";
import Other from "./Other.svelte";

export default {
  title: "Helpers/Tooltips/2. Examples/3. Other Examples",
};

export const $3OtherExamples = {
  render: (args) => ({
    Component: Other,
  }),

  name: "3. Other Examples",
  args: {},
};
