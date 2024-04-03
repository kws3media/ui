import { Meta, Story } from "@storybook/addon-svelte-csf";
import dedent from "ts-dedent";
import Version from "~/version.mdx";
import Search from "./Search.svelte";

export default {
  title: "Utils/2. Examples/Search",
};

export const Search = {
  render: (args) => ({
    Component: Search,
  }),

  name: "Search",
  args: {},
};
