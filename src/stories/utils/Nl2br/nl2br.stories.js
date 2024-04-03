import { Meta, Story } from "@storybook/addon-svelte-csf";
import dedent from "ts-dedent";
import Version from "~/version.mdx";
import Nl2br from "./Nl2br.svelte";

export default {
  title: "Utils/2. Examples/Nl2br",
};

export const Nl2Br = {
  render: (args) => ({
    Component: Nl2br,
  }),

  name: "Nl2br",
  args: {},
};
