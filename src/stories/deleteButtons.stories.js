import { action } from '@storybook/addon-actions';
import "../scss/app.scss";
import { DocsPage, DocsContainer } from '@storybook/addon-docs';
import DeleteButtonDocumentation from './views/DeleteButtonDocumentation.mdx'

import { DeleteButton as Component } from '@kws3/buttons';

export default {
  title: 'Buttons/Delete Button 3',
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
      page: DeleteButtonDocumentation,
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

export const DeleteButton3 = Template.bind({});
DeleteButton3.args = {
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