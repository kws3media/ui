import { storiesOf } from '@storybook/svelte';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';

import "../scss/app.scss";

import DeleteButtonView from './views/DeleteButtonView.html';





storiesOf('Buttons|DeleteButton', module)
  .addDecorator(withKnobs)
  .add('DeleteButton', () => {
    const color = select(
      'color',
      [
        'transparent', 'primary', 'info', 'warning',
        'success', 'danger', 'dark', 'light'
      ],
      'danger'
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
      Component: DeleteButtonView,
      data: {
        color,
        size,
        icon_only
      },
    }
  });