import { storiesOf } from '@storybook/svelte';

import "../scss/app.scss";

import IconView from './views/IconView.html';





storiesOf('Helpers | Icon ', module)
  .add('Icon', () => ({
    Component: IconView,
  }))