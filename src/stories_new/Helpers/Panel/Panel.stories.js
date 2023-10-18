import { Panel } from "@kws3/ui";
import PanelDecorator from "./Panel.svelte";

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

let argTypes = {};

export default {
  title: "Helpers/Panel",
  component: Panel,
  decorators: [() => PanelDecorator],
  args: args,
  argTypes: argTypes,
};

export const Main = {
  name: "Preview",
  args: args,
  argTypes: argTypes,
  props: args,
};
