import { Meta, Story, Canvas } from "@storybook/addon-svelte-csf";
import dedent from "ts-dedent";
import Version from "~/version.mdx";
import ExampleDatagrid from "./Example.svelte";

export default {
  title: "Datagrid/Example",
  component: ExampleDatagrid,

  parameters: {
    viewMode: "docs",

    previewTabs: {
      canvas: {
        hidden: true,
      },
    },
  },
};

export const Example = {
  render: (args) => ({
    Component: ExampleDatagrid,
  }),

  name: "Example",
  args: {},
};
