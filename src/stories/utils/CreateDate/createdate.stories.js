import { Meta, Story } from "@storybook/addon-svelte-csf";
import dedent from "ts-dedent";
import Version from "~/version.mdx";
import CreateDate from "./CreateDate.svelte";

export default {
  title: "Utils/2. Examples/CreateDate",
};

export const CreateDate = {
  render: (args) => ({
    Component: CreateDate,
  }),

  name: "CreateDate",
  args: {},
};
