import { storiesOf } from '@storybook/svelte';
import Centered from '@storybook/addon-centered/svelte';
import "../scss/app.scss";


import WelcomeView from './views/WelcomeView.html';

storiesOf('Welcome', module)
.addDecorator(Centered)
.add('Welcome', () => ({
  Component: WelcomeView,
}));

