import { Meta, Story } from "@storybook/addon-svelte-csf";
import dedent from "ts-dedent";
import Version from "~/version.mdx";
import Sync from "./Sync.svelte";

export default {
  title: "Charts/Advanced Examples/Synchronized Charts",
};

export const SynchronizedCharts = {
  render: (args) => ({
    Component: Sync,
  }),

  name: "Synchronized Charts",
  args: {},
};
