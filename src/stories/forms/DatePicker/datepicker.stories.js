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
import { Datepicker } from "@kws3/ui";
import M from "../../helpers/Message/Message.svelte";
import { action } from "@storybook/addon-actions";

let args = {
  value: "",
  style: "",
  class: "",
  placeholder: "Select Date..",
  disabled: false,
  min_date: null,
  max_date: null,
  enable_dates: [],
  disable_dates: [],
  range_mode: false,
  options: {},
  calendar_color: "primary",
  color: "",
  readonly: false,
};

export default {
  title: "Forms/Datepicker",
  component: Datepicker,
  args: args,

  argTypes: {
    calendar_color: {
      control: {
        type: "select",
      },
    },

    color: {
      control: {
        type: "select",
      },
    },

    range_mode: {},
  },
};

export const Datepicker = {
  render: (args) => ({
    Component: Datepicker,
    props: args,

    on: {
      change: action("change"),
      dateChange: action("dateChange"),
      ready: action("ready"),
      open: action("open"),
      close: action("close"),
      monthChange: action("monthChange"),
      yearChange: action("yearChange"),
    },
  }),

  name: "Datepicker",
  args: args,
};
