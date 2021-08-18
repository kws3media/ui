import { action } from '@storybook/addon-actions';
import "../scss/app.scss";

import DeleteButtonView from './views/DeleteButtonView.svelte';
import DeleteButtonDocumentation from './views/DeleteButtonDocumentation.mdx'

export default {
  title: 'Buttons/Delete Button',
  component: DeleteButtonView,
  props: {
    text: 'Squared text',
  },
  argTypes:{
    color: {
      control: { type: "select", options: ["primary", "primary", "success", "danger", "warning", "dark", "light"] },
    },
    size:{
      control: {type:"select", options:["small", "medium", "large"]}
    }
  },
  parameters: {
    docs: {
      page: DeleteButtonDocumentation,
    }
  },
}

const Template = (args) => ({
  Component: DeleteButtonView,
  props: args,
  on: {
    click: action('clicked'),
  },
});

export const DeleteButton = Template.bind({});
DeleteButton.args = {};

