import { storiesOf } from '@storybook/svelte';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';

import "../scss/app.scss";

import LoaderView from './views/LoaderView.html';





storiesOf('Helpers|Loader', module)
  .addDecorator(withKnobs)
  .add('Loader', () => {
    const color = select(
      'color',
      [
        'transparent', 'primary', 'info', 'warning',
        'success', 'danger', 'dark', 'light'
      ],
      'transparent'
    );

    const size = select(
      'size',
      [
        'medium', 'small', 'large'
      ],
      'medium'
    );

    const large_loader = boolean('large_loader', false);

    const type = select(
      'type',
      [
        '', 'inline'
      ],
      ''
    );

    return {
      Component: LoaderView,
      data: {
        color,
        size,
        type,
        large_loader
      },
    }
  });