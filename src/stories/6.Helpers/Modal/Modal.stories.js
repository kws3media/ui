import { Modal } from "@kws3/ui";
import ModalDecorator from "./Modal.svelte";

let args = {
  size: "small",
  class: "",
  style: "",
  inner_class: "",
  inner_style: "",
  is_active: false,
  closable: true,
  close_on_click_outside: false,
  cy: "",
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
  title: "Helpers/Modal/Modal",
  component: Modal,
  decorators: [(_, { args }) => ({ Component: ModalDecorator, props: args })],
  args: args,
  argTypes: argTypes,
};

export const Main = {
  name: "Preview",
  tags: ["isHidden"],
  args: args,
  argTypes: argTypes,
  props: args,
};
