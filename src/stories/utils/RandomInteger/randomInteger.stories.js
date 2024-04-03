import { Meta, Story } from "@storybook/addon-svelte-csf";
import dedent from "ts-dedent";
import Version from "~/version.mdx";
import RandomInteger from "./RandomInteger.svelte";

export default {
  title: "Utils/2. Examples/RandomInteger",
};

export const RandomInteger = {
  render: (args) => ({
    Component: RandomInteger,
  }),

  name: "RandomInteger",
  args: {},
};
