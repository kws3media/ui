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
import { Modal } from "@kws3/ui";
import ModalDecorator from "./Modal.svelte";
import { action } from "@storybook/addon-actions";

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

export default {
  title: "Helpers/Modal",
  component: Modal,
  args: args,
};

export const Modal = {
  render: (args) => ({
    Component: ModalDecorator,
    props: args,

    on: {
      click: action("Opened"),
    },
  }),

  name: "Modal",
  args: args,
};
