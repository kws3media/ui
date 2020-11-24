import { storiesOf } from '@storybook/svelte';
import { withKnobs, select, boolean , text} from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import "../scss/app.scss";

import CheckboxView from './views/CheckboxView.html';





storiesOf('Forms|Other Controls', module)
  .addDecorator(withKnobs)
  .add('Checkbox', () => {
    const color = select(
      'color',
      [
        '',
        'primary', 'info',
        'success', 'danger',
        'dark', 'light'
      ],
      ''
    );


    const disabled = boolean('disabled', false);

    return {
      Component: CheckboxView,
      data: {
        color,
        disabled
      },
      on:{
        change:action('change')
      }
    }
  });