import { storiesOf } from '@storybook/svelte';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';


import "../scss/app.scss";

import NotificationView from './views/NotificationView.html';



storiesOf('Helpers|Notification', module)
  .addDecorator(withKnobs)
  .add('Notification', () => {

    const color = select(
      'color',
      [
        '', 'primary', 'info', 'warning',
        'success', 'danger', 'dark', 'light'
      ],
      ''
    );

    return {
      Component: NotificationView,
      data: {
        color
      }
    }
  })