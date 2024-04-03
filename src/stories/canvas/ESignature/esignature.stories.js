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
import { ESignature as KWS3ESignature } from "@kws3/ui";
import ESignatureDecorator from "./ESignature.svelte";
import { action } from "@storybook/addon-actions";

let args = {
  width: "520px",
  height: "170px",
  background_image: "",
  readonly: false,
  disabled: false,
  control_position: "center",
  expand_from: "center",
  expand_to: "center",
  expand_scale: 50,
  actions: ["undo", "redo", "reset"],
};

export default {
  title: "Canvas/ESignature",
  component: KWS3ESignature,
  args: args,

  argTypes: {
    control_position: {
      control: "select",
    },
  },
};

export const ESignature = {
  render: (args) => ({
    Component: ESignatureDecorator,
    props: args,
  }),

  name: "ESignature",
  args: args,
};
