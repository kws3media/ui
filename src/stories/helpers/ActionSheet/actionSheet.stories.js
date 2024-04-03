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
import { ActionSheet } from "@kws3/ui";
import ActionSheetDecorator from "./ActionSheet.svelte";
import { action } from "@storybook/addon-actions";

let args = {
  is_active: false,
  closable: true,
  close_on_click_outside: true,
  style: "",
  class: "",
  inner_style: "",
  inner_class: "",
};

export default {
  title: "Helpers/ActionSheet",
  component: ActionSheet,
  args: args,
  argTypes: {},
};

export const ActionSheet = {
  render: (args) => ({
    Component: ActionSheetDecorator,
    props: args,

    on: {
      click: action("Opened"),
    },
  }),

  name: "ActionSheet",
  args: args,
};
