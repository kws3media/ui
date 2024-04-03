import { Meta, Story } from "@storybook/addon-svelte-csf";
import dedent from "ts-dedent";
import Version from "~/version.mdx";
import Drill from "./Drill.svelte";

export default {
  title: "Charts/Advanced Examples/Drilldown or Linked Charts",
};

export const DrilldownOrLinkedCharts = {
  render: (args) => ({
    Component: Drill,
  }),

  name: "Drilldown or Linked Charts",
  args: {},
};
