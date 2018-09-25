import { storiesOf } from '@storybook/svelte';
import { withKnobs } from '@storybook/addon-knobs';


import "../scss/app.scss";

import MaskedInput from './views/MaskedInputView.html';


storiesOf('Forms|Masked Input', module)
  .addDecorator(withKnobs)
  .add('Masked Input', () => {



    return {
      Component: MaskedInput,
      data: {
      }
    }
  })