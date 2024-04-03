import { Meta, Story } from "@storybook/addon-svelte-csf";
import dedent from "ts-dedent";
import Version from "~/version.mdx";
import KeyboardEvents from "./KeyboardEvents.svelte";

export default {
  title: "Utils/2. Examples/KeyboardEvents/1. Pre-defined Events",
};

export const $1PreDefinedEvents = {
  render: (args) => ({
    Component: KeyboardEvents,
  }),

  name: "1. Pre-defined Events",
  args: {},
};
