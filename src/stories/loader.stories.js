import { storiesOf } from '@storybook/svelte';

import "../scss/app.scss";

import LoaderView from './views/LoaderView.html';





storiesOf('Helpers|Loader', module)
  .add('Loader', () => ({
    Component: LoaderView,
  }))