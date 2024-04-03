import { Meta, Story } from "@storybook/addon-svelte-csf";
import dedent from "ts-dedent";
import Version from "~/version.mdx";
import Capitalize from "./Capitalize.svelte";

export default {
  title: "Utils/2. Examples/CapitaliseFirstLetter",
};

export const CapitaliseFirstLetter = {
  render: (args) => ({
    Component: Capitalize,
  }),

  name: "CapitaliseFirstLetter",
  args: {},
};
