import { storiesOf } from '@storybook/svelte';


import "../scss/app.scss";

import ColorPickerView from './views/ColorPickerView.html';





storiesOf('Forms|ColorPicker', module)
  .add('ColorPicker', () => ({ Component: ColorPickerView}))