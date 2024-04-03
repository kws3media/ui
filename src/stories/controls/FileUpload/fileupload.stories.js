import {
  Story,
  Preview,
  Meta,
  ArgsTable,
  Source,
  Description,
  Canvas,
} from "@storybook/addon-svelte-csf";
import dedent from "ts-dedent";
import Version from "~/version.mdx";
import { FileUpload } from "@kws3/ui";
import FileUploadDecorator from "./FileUpload.svelte";
import { action } from "@storybook/addon-actions";

let args = {
  info: "",
  key: "",
  message: "Choose File...",
  max: 5000000,
  allowed: "*",
  color: "",
  info_color: "grey",
  class: "",
  disabled: false,
};

export default {
  title: "Forms/Controls/FileUpload",
  component: FileUpload,
  args: args,

  argTypes: {
    color: {
      control: "select",
    },

    size: {
      control: "select",
    },

    info_color: {
      control: "select",
    },
  },
};

export const FileUpload = {
  render: (args) => ({
    Component: FileUploadDecorator,
    props: args,

    on: {
      file_uploaded: action("file_uploaded"),
      file_upload_error: action("file_upload_error"),
      file_chosen: action("file_chosen"),
    },
  }),

  name: "FileUpload",
  args: args,
};
