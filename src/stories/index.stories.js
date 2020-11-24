import WelcomeView from './views/Welcome.svelte';


export default {
  title: 'Welcome',
  component: WelcomeView
};

const Template = ({ onClick, ...args }) => ({
  Component: WelcomeView,
  props: args,
});

export const Welcome = Template.bind({});