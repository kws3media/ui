import { storiesOf } from '@storybook/svelte';
import { withKnobs, select, boolean , text} from '@storybook/addon-knobs';

import "../scss/app.scss";

import ToggleControlView from './views/ToggleControlView.html';





storiesOf('Forms|Other Controls', module)
  .addDecorator(withKnobs)
  .add('ToggleControl', () => {
    const color = select(
      'color',
      [
        'primary', 'info',
        'success', 'danger',
        'dark', 'light'
      ],
      'success'
    );

    const on_text = text('on_text', '');
    const off_text = text('off_text', '');
    const label1 = text('label1', 'Turn this on?');

    const disabled = boolean('disabled', false);

    return {
      Component: ToggleControlView,
      data: {
        color,
        on_text,
        off_text,
        disabled,
        label1
      },
    }
  });