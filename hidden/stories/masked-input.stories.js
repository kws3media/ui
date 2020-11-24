import { storiesOf } from '@storybook/svelte';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';


import "../scss/app.scss";

import MaskedInput from './views/MaskedInputView.html';


storiesOf('Forms|Masked Input', module)
  .addDecorator(withKnobs)
  .add('Masked Input', () => {

    const showMask = boolean('showMask', false);
    const guide = boolean('guide', true);
    const guideOnOutput = boolean('guideOnOutput', false);
    const keepCharPositions = boolean('keepCharPositions', true);

    const selectedMask = select(
      'Mask',
      [
        'USPhone', 'date', 'creditCard'
      ],
      'USPhone'
    );

    return {
      Component: MaskedInput,
      data: {
        showMask,
        guide,
        selectedMask,
        guideOnOutput,
        keepCharPositions
      }
    }
  })