import TestView from './views/Test.svelte';

export default {title: 'Test', component: TestView };
const Template = ({ onClick, ...args }) => ({
  Component: TestView,
  props: args,
});

export const Test = Template.bind({});