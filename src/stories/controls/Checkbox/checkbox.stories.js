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
import { Checkbox } from "@kws3/ui";
import { action } from "@storybook/addon-actions";
import { expect, within, userEvent, waitFor } from "@storybook/test";

let args = {
  class: "",
  style: "",
  label_style: "",
  size: "",
  color: "",
  inverted: false,
  circle: false,
  checked: true,
  disabled: false,
  icon: "check",
  icon_family: null,
};

export default {
  title: "Forms/Controls/Checkbox",
  component: Checkbox,
  args: args,

  argTypes: {
    class: {},
    style: {},
    label_style: {},

    color: {
      control: {
        type: "select",
      },
    },

    size: {
      control: {
        type: "select",
      },
    },

    inverted: {},
    circle: {},
    checked: {},
    disabled: {},
    icon: {},

    icon_family: {
      control: {
        type: "select",
      },
    },
  },
};

export const Checkbox = {
  render: (args) => ({
    Component: Checkbox,
    props: args,

    on: {
      change: action("Changed"),
    },
  }),

  name: "Checkbox",
  args: args,

  //await userEvent.click(canvas.getByRole('checkbox'));
  play:
    //await expect(canvas.getByRole('checkbox').checked).toBe(true);
    async ({ args, canvasElement }) => {
      const canvas = within(canvasElement);
      console.log(canvas);
    },
};
