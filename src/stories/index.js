import { storiesOf } from '@storybook/svelte';
import "../scss/app.scss";

import WelcomeView from './views/WelcomeView.html';
import ButtonView from './views/ButtonView.html';
import SubmitButtonView from './views/SubmitButtonView.html';

storiesOf('Welcome', module).add('Welcome', () => ({
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
  .add('Custom Submit Button', () => ({
    Component: SubmitButtonView,
    data: {
      classes: 'is-primary',
      icon: 'plus',
      icon_size: 'small',
      text: 'Add User',
      disabled: false
    },
  }))