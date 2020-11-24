import { storiesOf } from '@storybook/svelte';
import { withKnobs, select, boolean , text} from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import "../scss/app.scss";

import ToggleButtonsView from './views/ToggleButtonsView.html';





storiesOf('Forms|Other Controls', module)
  .addDecorator(withKnobs)
  .add('ToggleButtons', () => {
    const active_class = select(
      'active_class',
      [
        'is-primary', 'is-info',
        'is-success', 'is-danger',
        'is-dark', 'is-light'
      ],
      'is-success'
    );

    const size = select(
      'size',
      [
        'small',
        '',
        'medium',
        'large'
      ],
      ''
    );

    const disabled = boolean('disabled', false);
    const fullwidth = boolean('fullwidth', false);

    return {
      Component: ToggleButtonsView,
      data: {
        fullwidth,
        active_class,
        size,
        disabled
      },
      on:{
        change: action('change'),
      }

    }
  });