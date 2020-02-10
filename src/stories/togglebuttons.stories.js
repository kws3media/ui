import { storiesOf } from '@storybook/svelte';
import { withKnobs, select, boolean , text} from '@storybook/addon-knobs';

import "../scss/app.scss";

import ToggleButtonsView from './views/ToggleButtonsView.html';





storiesOf('Forms|Other Controls', module)
  .addDecorator(withKnobs)
  .add('ToggleButtons', () => {
    const color = select(
      'color',
      [
        'primary', 'info',
        'success', 'danger',
        'dark', 'light'
      ],
      'success'
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

    const on_text = text('on_text', '');
    const off_text = text('off_text', '');

    const disabled = boolean('disabled', false);

    return {
      Component: ToggleButtonsView,
      data: {
        color,
        size,
        on_text,
        off_text,
        disabled
      },
    }
  });