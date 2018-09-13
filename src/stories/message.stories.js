import { storiesOf } from '@storybook/svelte';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';


import "../scss/app.scss";

import MessageView from './views/MessageView.html';


storiesOf('Helpers|Message', module)
  .addDecorator(withKnobs)
  .add('Message', () => {

    const color = select(
      'color',
      [
        '', 'primary', 'info', 'warning',
        'success', 'danger', 'dark', 'light'
      ],
      ''
    );


    return {
      Component: MessageView,
      data: {
        color
      }
    }
  })