import { storiesOf } from '@storybook/svelte';

import "../scss/app.scss";

import View from './views/SlidingPaneView.html';





storiesOf('Forms|Searchable Select', module)
  .add('Searchable Select', () => {
    return {
      Component: View
    }
  })