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
import { Colorpicker } from "@kws3/ui";
import { action } from "@storybook/addon-actions";

let args = {
  color: "000000",
  typeable: true,
  readonly: false,
  mini: false,
  disabled: false,
};

export default {
  title: "Forms/Colorpicker",
  component: Colorpicker,
  args: args,

  argTypes: {
    size: {
      control: "select",
    },
  },
};

export const Colorpicker = {
  render: (args) => ({
    Component: Colorpicker,
    props: args,

    on: {
      change: action("change"),
    },
  }),

  name: "Colorpicker",
  args: args,
};
