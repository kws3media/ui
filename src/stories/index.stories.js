import WelcomeView from './views/Welcome.svelte';

export default {
  title: 'Welcome',
  component: WelcomeView,
  parameters: {
    previewTabs: {
      "storybook/docs/panel": {
        hidden: true,
      },
    },
    options: {
      showPanel: false,
    },
  },
};
const Template = ({ onClick, ...args }) => ({
  Component: WelcomeView,
  props: args,
});

export const Welcome = Template.bind({});

