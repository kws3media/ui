import { storiesOf } from '@storybook/svelte';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';

import "../scss/app.scss";

import ToggleView from './views/ToggleView.html';





storiesOf('Buttons|Toggle', module)
  .addDecorator(withKnobs)
  .add('Toggle', () => {
    const color = select(
      'color',
      [
        'transparent', 'primary', 'info', 'warning',
        'success', 'danger', 'dark', 'light'
      ],
      'primary'
    );

    const disabled = boolean('disabled', false);

    return {
      Component: ToggleView,
      data: {
        color,
        disabled
      },
    }
  });