import { Meta, Story } from "@storybook/addon-svelte-csf";
import dedent from "ts-dedent";
import Version from "~/version.mdx";
import DateToOrdinal from "./DateToOrdinal.svelte";

export default {
  title: "Utils/2. Examples/DateToOrdinal",
};

export const DateToOrdinal = {
  render: (args) => ({
    Component: DateToOrdinal,
  }),

  name: "DateToOrdinal",
  args: {},
};
