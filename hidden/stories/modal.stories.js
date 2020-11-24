import { storiesOf } from '@storybook/svelte';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';


import "../scss/app.scss";

import ModalView from './views/ModalView.html';


storiesOf('Helpers|Modal', module)
  .addDecorator(withKnobs)
  .add('Modal', () => {

    const size = select(
      'size',
      [
        '', 'medium', 'large'
      ],
      ''
    );


    return {
      Component: ModalView,
      data: {
        size
      }
    }
  })