import { storiesOf } from '@storybook/svelte';
import { withKnobs, boolean } from '@storybook/addon-knobs';


import "../scss/app.scss";

import MaskedInput from './views/MaskedInputView.html';


storiesOf('Forms|Masked Input', module)
  .addDecorator(withKnobs)
  .add('Masked Input', () => {

    const showMask = boolean('disabled', false);

    return {
      Component: MaskedInput,
      data: {
        showMask
      }
    }
  })