import { storiesOf } from '@storybook/svelte';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';



import "../scss/app.scss";

import ColorPickerView from './views/ColorPickerView.html';




storiesOf('Forms|ColorPicker', module)
  .addDecorator(withKnobs)
  .add('ColorPicker', () => {

    const disabled = boolean('disabled', false);

    const readonly = boolean('readonly', false);

    return {
      Component: ColorPickerView,
      data: {
        disabled,
        readonly
      },
    }
  });