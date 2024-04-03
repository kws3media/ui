import { Meta, Story } from "@storybook/addon-svelte-csf";
import dedent from "ts-dedent";
import Version from "~/version.mdx";
import ResizeObserver from "./ResizeObserver.svelte";

export default {
  title: "Utils/2. Examples/ResizeObserver",
};

export const ResizeObserver = {
  render: (args) => ({
    Component: ResizeObserver,
  }),

  name: "ResizeObserver",
  args: {},
};
