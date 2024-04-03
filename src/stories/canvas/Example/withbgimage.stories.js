import { Meta, Story, Source } from "@storybook/addon-svelte-csf";
import dedent from "ts-dedent";
import Version from "~/version.mdx";
import WithBGImage from "./WithBGImage.svelte";

export default {
  title: "Canvas/Examples",
};

export const WithBackgroundImage = {
  render: () => ({
    Component: WithBGImage,
  }),

  name: "With Background Image",
};
