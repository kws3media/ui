import { storiesOf } from '@storybook/svelte';

import "../scss/app.scss";

import PanelView from './views/PanelView.html';





storiesOf('Helpers | Panel ', module)
  .add('Panel', () => ({
    Component: PanelView,
  }))