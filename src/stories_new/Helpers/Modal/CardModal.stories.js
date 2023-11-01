import { CardModal } from "@kws3/ui";
import CardModalDecorator from "./CardModal.svelte";

let args = {
  title: "Card Modal",
  size: "small",
  is_active: false,
  closable: true,
  close_on_click_outside: false,
  has_footer: true,
  class: "",
  style: "",
  inner_class: "",
  inner_style: "",
  cy: "",
};

let argTypes = {};

export default {
  title: "Helpers/Modal/CardModal",
  component: CardModal,
  decorators: [
    (_, { args }) => ({ Component: CardModalDecorator, props: args }),
  ],
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
