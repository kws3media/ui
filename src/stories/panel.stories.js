import { storiesOf } from '@storybook/svelte';
// import Centered from '@storybook/addon-centered/svelte';

import "../scss/app.scss";


import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';

import Panel from './views/Panel.html';





storiesOf('Helpers | Panel ', module)
  // .addDecorator(Centered)
  .addDecorator(withKnobs)
  .add('Panel', () => {


    return {
      Component: Panel,
      data: {
        title: text('Title', 'User Panel'),
        subtitle: text('Subtitle', ''),
      },
    }
  })