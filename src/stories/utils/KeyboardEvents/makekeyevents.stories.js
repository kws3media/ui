import { Meta, Story } from "@storybook/addon-svelte-csf";
import dedent from "ts-dedent";
import Version from "~/version.mdx";
import MakeKeyEvent from "./MakeKeyEvent.svelte";

export default {
  title: "Utils/2. Examples/KeyboardEvents/2. Create Key Events",
};

export const $2CreateKeyEvents = {
  render: (args) => ({
    Component: MakeKeyEvent,
  }),

  name: "2. Create Key Events",
  args: {},
};
