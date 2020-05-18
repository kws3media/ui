import { storiesOf } from '@storybook/svelte';
import { withKnobs, select, boolean , text} from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import "../scss/app.scss";

import FileUploadView from './views/FileUploadView.html';





storiesOf('Forms|Other Controls', module)
  .addDecorator(withKnobs)
  .add('Radio', () => {
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

    return {
      Component: FileUploadView,
      data: {
        color,
        disabled
      },
      on:{
        change:action('change')
      }
    }
  });