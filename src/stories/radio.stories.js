import { storiesOf } from '@storybook/svelte';
import { withKnobs, select, boolean , text} from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import "../scss/app.scss";

import RadioView from './views/RadioView.html';





storiesOf('Forms|Other Controls', module)
  .addDecorator(withKnobs)
  .add('Radio', () => {
    const color = select(
      'color',
      [
        'primary', 'info',
        'success', 'danger',
        'dark', 'light'
      ],
      'success'
    );


    const disabled = boolean('disabled', false);

    return {
      Component: RadioView,
      data: {
        color,
        disabled
      },
      on:{
        change:action('change')
      }
    }
  });