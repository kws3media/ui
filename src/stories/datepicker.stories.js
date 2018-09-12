import { storiesOf } from '@storybook/svelte';

import "../scss/app.scss";

import DatepickerView from './views/DatepickerView.html';





storiesOf('Forms|Datepicker', module)
  .add('Datepicker', () => ({Component: DatepickerView}))