import { Meta, Story } from "@storybook/addon-svelte-csf";
import dedent from "ts-dedent";
import Version from "~/version.mdx";
import Debounce from "./Debounce.svelte";

export default {
  title: "Utils/2. Examples/Debounce",
};

export const Debounce = {
  render: (args) => ({
    Component: Debounce,
  }),

  name: "Debounce",
  args: {},
};
