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
import { Message } from "@kws3/ui";
import MessageDecorator from "./Message.svelte";
import { action } from "@storybook/addon-actions";

let args = {
  size: "",
  color: "info",
  class: "",
  style: "",
  inner_class: "",
  inner_style: "",
  title_class: "",
  title: "",
  has_title: false,
  dismissable: false,
  active: true,
};

export default {
  title: "Helpers/Message",
  component: Message,
  args: args,

  argTypes: {
    color: {
      control: "select",
    },

    size: {
      control: "select",
    },
  },
};

export const Message = {
  render: (args) => ({
    Component: MessageDecorator,
    props: args,

    on: {
      dismiss: action("dismiss"),
    },
  }),

  name: "Message",
  args: args,
};
