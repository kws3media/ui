import { storiesOf } from '@storybook/svelte';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';

import "../scss/app.scss";

import IconView from './views/IconView.html';





storiesOf('Helpers|Icon', module)
  .addDecorator(withKnobs)
  .add('Icon', () => {

    const color = select(
      'color',
      [
        '', 'primary', 'info', 'warning',
        'success', 'danger', 'dark', 'light'
      ],
      ''
    );

    const size = select(
      'size',
      [
        '', 'small', 'medium', 'large'
      ],
      ''
    );

    return {
      Component: IconView,
      data:{
        size,
        color
      }
    }
  })