import FileUploadDecorator from "./FileUpload.svelte";
import { FileUpload } from "@kws3/ui";

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

let argTypes = {
  color: {
    control: "select",
  },
  size: {
    control: "select",
  },
  info_color: {
    control: "select",
  },
};

export default {
  title: "Forms/Controls/FileUpload",
  component: FileUpload,
  decorators: [() => FileUploadDecorator],
  args: args,
  argTypes: argTypes,
};

export const Main = {
  name: "Preview",
  args: args,
  argTypes: argTypes,
  props: args,
};
