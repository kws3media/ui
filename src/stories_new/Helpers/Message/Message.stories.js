import { Message } from "@kws3/ui";
import MessageDecorator from "./Message.svelte";

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

let argTypes = {
  color: {
    control: "select",
  },
  size: {
    control: "select",
  },
};

export default {
  title: "Helpers/Message",
  component: Message,
  decorators: [() => MessageDecorator],
  args: args,
  argTypes: argTypes,
};

export const Main = {
  name: "Preview",
  args: args,
  argTypes: argTypes,
  props: args,
};
