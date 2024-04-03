import { Meta, Story } from "@storybook/addon-svelte-csf";
import dedent from "ts-dedent";
import Version from "~/version.mdx";
import rAF from "./rAF.svelte";

export default {
  title: "Utils/2. Examples/RAF",
};

export const Raf = {
  render: (args) => ({
    Component: rAF,
  }),

  name: "RAF",
  args: {},
};
