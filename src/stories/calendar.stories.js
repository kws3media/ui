import { storiesOf } from '@storybook/svelte';

import "../scss/app.scss";

import CalendarView from './views/CalendarView.html';





storiesOf('Calendar|Default', module)
  .add('Calendar', () => {

    return {
      Component: CalendarView
    }
  });