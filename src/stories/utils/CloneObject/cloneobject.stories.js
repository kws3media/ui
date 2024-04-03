import { Meta, Story } from "@storybook/addon-svelte-csf";
import dedent from "ts-dedent";
import Version from "~/version.mdx";
import CloneObject from "./CloneObject.svelte";

export default {
  title: "Utils/2. Examples/CloneObject",
};

export const CloneObject = {
  render: (args) => ({
    Component: CloneObject,
  }),

  name: "CloneObject",
  args: {},
};
