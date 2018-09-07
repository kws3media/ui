import { storiesOf } from '@storybook/svelte';

import "../scss/app.scss";

import MessageView from './views/MessageView.html';





storiesOf('Helpers|Message', module)
  .add('Message', () => ({
    Component: MessageView,
  }))