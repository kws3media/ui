import { storiesOf } from '@storybook/svelte';
import { action } from '@storybook/addon-actions';

import "../scss/app.scss";

import CalendarView from './views/CalendarView.html';
import CalendarHelpView from './views/CalendarHelpView.html';





storiesOf('Standalone|Calendar', module)
  .add('Example', () => {

    return {
      Component: CalendarView,
      on:{
        dateChosen: action('dateChosen'),
        dateChange: action('dateChange'),
        dayViewEvent: action('dayViewEvent'),
        monthViewEvent: action('monthViewEvent')
      }
    }
  })
  .add('Usage', () => {

    return {
      Component: CalendarHelpView
    }
  });