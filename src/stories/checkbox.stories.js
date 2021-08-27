import { action } from "@storybook/addon-actions";
import CheckboxView from "./views/Checkbox.svelte";
import "../scss/app.scss";

export default {
  title: "Controls/Checkbox",
  component: CheckboxView,
  argTypes: {
    color: {
      control: {
        type: "select",
        options: [
          "primary",
          "primary",
          "success",
          "danger",
          "warning",
          "dark",
          "light",
        ],
      },
    },
  },
  parameters: { actions: { argTypesRegex: "^on.*" } },
};

const Template = (args) => ({
  Component: CheckboxView,
  props: args,
  on: {
    change: action("changed"),
  },
});

export const Checkbox = Template.bind({});
Checkbox.args = {
  color: "primary",
  checked: true,
  disabled: false,
};
//Checkbox.decorators = [() => CanvasDecorator];
