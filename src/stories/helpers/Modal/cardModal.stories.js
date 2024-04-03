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
import { CardModal } from "@kws3/ui";
import CardModalDecorator from "./CardModal.svelte";
import { action } from "@storybook/addon-actions";

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

export default {
  title: "Helpers/Modal/CardModal",
  component: CardModal,
  args: args,
};

export const CardModal = {
  render: (args) => ({
    Component: CardModalDecorator,
    props: args,
  }),

  name: "CardModal",
  args: args,
};
