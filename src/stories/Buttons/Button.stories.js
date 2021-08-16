import Button from '../components/Button.svelte';
import ButtonDocs from './Button.stories.mdx';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      page: ButtonDocs
    }
  },
}

const Template = (args) => ({ Component: Button, props: args });

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
Primary.args = {
    type: 'primary',
    outlined: true,
    disabled:false,
    small:false,
    label:"Button",
};

Secondary.args = {
  type: 'secondary',
  outlined: false,
  disabled:false,
  small:false,
  label:"Button",
};