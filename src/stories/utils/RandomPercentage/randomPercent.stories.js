import { Meta, Story } from "@storybook/addon-svelte-csf";
import dedent from "ts-dedent";
import Version from "~/version.mdx";
import RandomPercent from "./RandomPercent.svelte";

export default {
  title: "Utils/2. Examples/RandomPercent",
};

export const RandomPercent = {
  render: (args) => ({
    Component: RandomPercent,
  }),

  name: "RandomPercent",
  args: {},
};
