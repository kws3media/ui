import { storiesOf } from '@storybook/svelte';

import "../scss/app.scss";

import TimepickerView from './views/TimepickerView.html';





storiesOf('Forms|Timepicker', module)
  .add('Timepicker', () => ({ Component: TimepickerView}))