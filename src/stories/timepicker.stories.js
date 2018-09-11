import { storiesOf } from '@storybook/svelte';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';

import "../scss/app.scss";

import TimepickerView from './views/TimepickerView.html';





storiesOf('Forms|Timepicker', module)
  .addDecorator(withKnobs)
  .add('Timepicker', () => {

    const color = select(
      'color',
      [
        '', 'primary', 'info', 'warning',
        'success', 'danger', 'dark', 'light'
      ],
      ''
    );

    const size = select(
      'size',
      [
        '', 'small', 'medium', 'large'
      ],
      ''
    );

    return {
      Component: TimepickerView,
      data:{
        size,
        color
      }
    }
  })