import { storiesOf } from '@storybook/svelte';

import "../scss/app.scss";

import View from './views/SlidingPanesView.html';





storiesOf('Standalone|Sliding Panes', module)
  .add('Sliding Panes', () => {
    return {
      Component: View
    }
  })