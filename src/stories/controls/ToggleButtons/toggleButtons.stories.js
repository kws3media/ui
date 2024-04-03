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
import { ToggleButtons } from "@kws3/ui";
import { action } from "@storybook/addon-actions";

let args = {
  value: "",
  disabled: false,
  options: [
    { name: "Yes", value: 1, icon: "check-circle", subtitle: "Affirmative" },
    { name: "No", value: 0, icon: "ban", subtitle: "Negative" },
    { name: "Maybe", value: null, icon: "question", subtitle: "¯_(ツ)_/¯" },
  ],
  class: "",
  inner_class: "",
  active_class: "is-primary",
  inactive_class: "is-outlined",
  size: "",
  fullwidth: false,
};

export default {
  title: "Forms/Controls/ToggleButtons",
  component: ToggleButtons,
  args: args,

  argTypes: {
    size: {
      control: "select",
    },
  },
};

export const ToggleButtons = {
  render: (args) => ({
    Component: ToggleButtons,
    props: args,

    on: {
      change: action("Changed"),
    },
  }),

  name: "ToggleButtons",
  args: args,
};
