import { storiesOf } from '@storybook/svelte';
import { withKnobs, boolean } from '@storybook/addon-knobs';


import "../scss/app.scss";

import TimepickerView from './views/TimepickerView.html';




storiesOf('Forms|Timepicker', module)
  .addDecorator(withKnobs)
  .add('Timepicker', () => {

    const disabled = boolean('disabled', false);

    return {
      Component: TimepickerView,
      data: {
        disabled
      },
    }
  });