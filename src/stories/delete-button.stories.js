import { action } from '@storybook/addon-actions';
import "../scss/app.scss";

import DeleteButtonView from './views/DeleteButtonView.svelte';


export default {
  title: 'Buttons/DeleteButton',
  component: DeleteButtonView,
  argTypes:{
    color: {
      control: { type: "select", options: ["primary", "primary", "success", "danger", "warning", "dark", "light"] },
    },
    size:{
      control: {type:"select", options:["small", "medium", "large"]}
    }
  },
  parameters: { actions: { "onChange": 'changed' } },
}

const Template = (args) => ({
  Component: DeleteButtonView,
  props: args,
  on: {
    do: action('clicked'),
  },
});

export const DeleteButton = Template.bind({});
DeleteButton.args = {
  color : "primary",
  size:"",
  icon_only : false,
  disabled : false
};

