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
import { Panel } from "@kws3/ui";
import PanelDecorator from "./Panel.svelte";
import { action } from "@storybook/addon-actions";

let args = {
  title: "",
  subtitle: "",
  class: "",
  style: "",
  inner_class: "",
  inner_style: "",
  cy: "",
  collapse_icon: "caret-right",
  collapsible: false,
  collapsed: false,
  relative: false,
  has_toolbar: true,
  has_center: true,
  has_title: false,
};

export default {
  title: "Helpers/Panel",
  component: Panel,
  args: args,
};

export const Panel = {
  render: (args) => ({
    Component: PanelDecorator,
    props: args,
  }),

  name: "Panel",
  args: args,
};
