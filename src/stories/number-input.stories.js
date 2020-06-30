import { storiesOf } from '@storybook/svelte';
import { withKnobs, select, boolean , text} from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import "../scss/app.scss";

import NumberInputView from './views/NumberInputView.html';





storiesOf('Forms|Other Controls', module)
  .addDecorator(withKnobs)
  .add('NumberInput', () => {

    const size = select(
      'size',
      [
        '',
        'small', 'medium', 'large'
      ],
      ''
    );


    const disabled = boolean('disabled', false);

    return {
      Component: NumberInputView,
      data: {
        size,
        disabled
      },
      on:{
        change:action('change')
      }
    }
  });