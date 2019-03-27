import { storiesOf } from '@storybook/svelte';
import { withKnobs, select, boolean , text} from '@storybook/addon-knobs';

import "../scss/app.scss";

import ToggleView from './views/ToggleView.html';





storiesOf('Buttons|Toggle', module)
  .addDecorator(withKnobs)
  .add('Toggle', () => {
    const color = select(
      'color',
      [
        'primary', 'info',
        'success', 'danger',
      ],
      'success'
    );

    const on_text = text('on_text', '');
    const off_text = text('off_text', '');

    const disabled = boolean('disabled', false);

    return {
      Component: ToggleView,
      data: {
        color,
        on_text,
        off_text,
        disabled
      },
    }
  });