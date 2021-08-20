import { action } from '@storybook/addon-actions';
import "../scss/app.scss";
import { DocsPage, DocsContainer } from '@storybook/addon-docs';
//import DeleteButtonView from './views/DeleteButtonView.svelte';
import DeleteButtonDocumentation from './views/DeleteButtonDocumentation.mdx'

import { DeleteButton as Component } from '@kws3/buttons';

export default {
  title: 'Buttons/Delete Button 1',
  component: Component,
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
      container: DocsContainer,
      page: DocsPage,
      description: {
        component: '## Some component _markdown_',
      },
      source: {
        type: 'code',
        //code: '<DeleteButton />',
      },
    }
  },
}

const Template = (args) => ({
  Component: Component,
  props: args,
  on: {
    erase : eraseDo,
    erased: action("Erased")
  },
});

export const DeleteButton1 = Template.bind({});
DeleteButton1.args = {
  color : "primary",
  disabled : false,
  size : "",
  icon_only : false,
  text : "Delete",
  icon : "minus-circle",
  doing_icon : "hourglass",
  done_icon : "check",
  doing_text : "Doing",
  done_text : "Deleted"
};
DeleteButton1.parameters = {
  docs: {
    description: {
      story: 'Some story **markdown**',
    },
  },
};

function eraseDo(event, success = true){
  let {doing, done, error} = event.detail;
  doing();
  setTimeout(() => {
    if(success){
      done();
    } else {
      error();
    }
  }, 2000)
}