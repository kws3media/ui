import { storiesOf } from '@storybook/svelte';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';

import "../scss/app.scss";

import SubmitButtonView from './views/SubmitButtonView.html';





storiesOf('Buttons|SubmitButton', module)
  .addDecorator(withKnobs)
  .add('SubmitButton', () => {


    const disabled = boolean('disabled', false);

    return {
      Component: SubmitButtonView,
      data: {
        disabled
      },
    }
  });