import { storiesOf } from '@storybook/svelte';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';

import "../scss/app.scss";

import FileUploadView from './views/FileUploadView.html';





storiesOf('Forms|Other Controls', module)
  .addDecorator(withKnobs)
  .add('FileUpload', () => {
    const color = select(
      'color',
      [
        '',
        'primary', 'info',
        'success', 'danger',
        'dark', 'light'
      ],
      ''
    );


    const disabled = boolean('disabled', false);
    const error_state = boolean('error_state', false);

    return {
      Component: FileUploadView,
      data: {
        color,
        disabled,
        error_state
      }
    }
  });