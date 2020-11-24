import { storiesOf } from '@storybook/svelte';
import { withKnobs } from '@storybook/addon-knobs';

import "../scss/app.scss";

import ToggleControlView from './views/ToggleControlView.html';





storiesOf('Forms|Other Controls', module)
  .addDecorator(withKnobs)
  .add('ToggleControl', () => {

    return {
      Component: ToggleControlView
    }
  });