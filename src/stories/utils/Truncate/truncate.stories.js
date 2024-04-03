import { Meta, Story } from "@storybook/addon-svelte-csf";
import dedent from "ts-dedent";
import Version from "~/version.mdx";
import Truncate from "./Truncate.svelte";

export default {
  title: "Utils/2. Examples/Truncate",
};

export const Truncate = {
  render: (args) => ({
    Component: Truncate,
  }),

  name: "Truncate",
  args: {},
};
