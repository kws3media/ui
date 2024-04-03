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
import { Timepicker } from "@kws3/ui";
import M from "../../helpers/Message/Message.svelte";
import { action } from "@storybook/addon-actions";

let args = {
  value: "",
  style: "",
  class: "",
  placeholder: "Select Time..",
  disabled: false,
  time_24hr: false,
  min_time: "",
  max_time: "",
  options: {},
  ui_color: "primary",
  color: "",
  readonly: false,
};

export default {
  title: "Forms/Timepicker",
  component: Timepicker,
  args: args,

  argTypes: {
    ui_color: {
      control: {
        type: "select",
      },
    },

    color: {
      control: {
        type: "select",
      },
    },

    time_24hr: {},
  },
};

export const Timepicker = {
  render: (args) => ({
    Component: Timepicker,
    props: args,

    on: {
      change: action("change"),
      timeChange: action("timeChange"),
      ready: action("ready"),
      open: action("open"),
      close: action("close"),
    },
  }),

  name: "Timepicker",
  args: args,
};
