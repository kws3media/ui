import { storiesOf } from '@storybook/svelte';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';

import "../scss/app.scss";

import SubmitButtonView from './views/SubmitButtonView.html';





storiesOf('Buttons|SubmitButton', module)
  .addDecorator(withKnobs)
  .add('SubmitButton', () => {

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

    const defaultText = text('text', 'Save Changes');
    const savedText = text('saved_text', 'Saved');
    const errorText = text('error_text', 'Failed to Save');

    const disabled = boolean('disabled', false);

    return {
      Component: SubmitButtonView,
      data: {
        size,
        color,
        text: defaultText,
        saved_text: savedText,
        error_text: errorText,
        disabled
      },
    }
  });