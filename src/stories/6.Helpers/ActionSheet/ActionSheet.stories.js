import { ActionSheet } from "@kws3/ui";
import ActionSheetDecorator from "./ActionSheet.svelte";

let args = {
  is_active: false,
  closable: true,
  close_on_click_outside: true,
  style: "",
  class: "",
  inner_style: "",
  inner_class: "",
};

let argTypes = {};

export default {
  title: "Helpers/ActionSheet",
  component: ActionSheet,
  decorators: [
    (_, { args }) => ({ Component: ActionSheetDecorator, props: args }),
  ],
  args: args,
  argTypes: argTypes,
  parameters: {
    layout: "fullscreen",
  },
};

export const Main = {
  name: "Preview",
  args: args,
  argTypes: argTypes,
  props: args,
};
