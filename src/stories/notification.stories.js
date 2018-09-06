import { storiesOf } from '@storybook/svelte';

import "../scss/app.scss";

import NotificationView from './views/NotificationView.html';





storiesOf('Helpers | Notification ', module)
  .add('Notification', () => ({
    Component: NotificationView,
  }))