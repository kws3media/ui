import { storiesOf } from '@storybook/svelte';
import { withKnobs, boolean } from '@storybook/addon-knobs';


import "../scss/app.scss";

import DatepickerView from './views/DatepickerView.html';



storiesOf('Forms|Datepicker', module)
  .addDecorator(withKnobs)
  .add('Datepicker', () => {

    const disabled = boolean('disabled', false);

    return {
      Component: DatepickerView,
      data: {
        disabled
      },
    }
  });