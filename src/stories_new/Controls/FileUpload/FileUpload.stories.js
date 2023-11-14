import FileUploadDecorator from "./FileUpload.svelte";
import { FileUpload } from "@kws3/ui";
import {
  Colors,
  Sizes,
} from "../../../../scripts/type_injector/frameworkTypes";

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
    options: Colors,
  },
  size: {
    control: "select",
    options: Sizes,
  },
  info_color: {
    control: "select",
    options: Colors,
  },
};

export default {
  title: "Forms/Controls/FileUpload",
  component: FileUpload,
  args: args,
  argTypes: argTypes,
  props: args,
};

export const Main = {
  name: "Preview",
  tags: ["isHidden"],
  decorators: [
    (_, { args }) => ({ Component: FileUploadDecorator, props: args }),
  ],
};
