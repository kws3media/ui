import { Meta, Story, Source } from "@storybook/addon-svelte-csf";
import dedent from "ts-dedent";
import Version from "~/version.mdx";
import WithCustomTool from "./WithCustomTool.svelte";

export default {
  title: "Canvas/Examples",
};

export const WithCustomTool = {
  render: () => ({
    Component: WithCustomTool,
  }),

  name: "With Custom Tool",
};
