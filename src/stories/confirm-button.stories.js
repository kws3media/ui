import { storiesOf } from '@storybook/svelte';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';

import "../scss/app.scss";

import ConfirmButtonView from './views/ConfirmButtonView.html';





storiesOf('Buttons|ConfirmButton', module)
  .addDecorator(withKnobs)
  .add('ConfirmButton', () => {
    const color = select(
      'color',
      [
        'transparent', 'primary', 'info', 'warning',
        'success', 'danger', 'dark', 'light'
      ],
      'primary'
    );

    const size = select(
      'size',
      [
        '', 'medium', 'small', 'large'
      ],
      ''
    );

    const icon_only = boolean('icon_only', false);

    return {
      Component: ConfirmButtonView,
      data: {
        color,
        size,
        icon_only
      },
    }
  });