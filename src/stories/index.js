import { storiesOf } from '@storybook/svelte';
import Centered from '@storybook/addon-centered/svelte';
import "../scss/app.scss";


import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';

import WelcomeView from './views/WelcomeView.html';
import ButtonView from './views/ButtonView.html';
import SubmitButtonView from './views/SubmitButtonView.html';

storiesOf('Welcome', module)
.addDecorator(Centered)
.add('Welcome', () => ({
  Component: WelcomeView,
}));

storiesOf('Button', module)
  .add('rounded', () => ({
    Component: ButtonView,
    data: {
      rounded: true,
      message: 'Rounded text',
    },
  }))
  .add('square', () => ({
    Component: ButtonView,
    data: {
      rounded: false,
      message: 'Squared text',
    },
  }));


storiesOf('Components', module)
  .addDecorator(withKnobs)
  .add('Custom Submit Button', () => {


    const label = 'States';
    const options = {
      default: 'default',
      error: 'error',
      saving: 'saving',
      saved: 'saved'
    };
    const defaultValue = options.default


    return {
      Component: SubmitButtonView,
      data: {
        classes: text('Classes', 'is-primary'),
        icon: text('Icon', 'plus'),
        icon_size: text('Icon Size', 'small'),
        text: text('Text', 'Save Changes'),
        disabled: boolean('disabled', false),
        state: select(label, options, defaultValue)
      },
    }
  })