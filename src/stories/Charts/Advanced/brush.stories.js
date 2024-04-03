import { Meta, Story } from "@storybook/addon-svelte-csf";
import dedent from "ts-dedent";
import Version from "~/version.mdx";
import Brush from "./Brush.svelte";

export default {
  title: "Charts/Advanced Examples/Brush Charts",
};

export const BrushCharts = {
  render: (args) => ({
    Component: Brush,
  }),

  name: "Brush Charts",
  args: {},
};
