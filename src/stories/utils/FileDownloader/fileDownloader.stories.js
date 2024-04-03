import { Meta, Story } from "@storybook/addon-svelte-csf";
import dedent from "ts-dedent";
import Version from "~/version.mdx";
import FileDownloader from "./FileDownloader.svelte";

export default {
  title: "Utils/2. Examples/FileDownloader",
};

export const FileDownloader = {
  render: (args) => ({
    Component: FileDownloader,
  }),

  name: "FileDownloader",
  args: {},
};
