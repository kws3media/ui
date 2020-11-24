import { storiesOf } from '@storybook/svelte';
import { withKnobs, number } from '@storybook/addon-knobs';

import "../scss/app.scss";

import TransitionView from './views/TransitionView.html';





storiesOf('Standalone|Transitions', module)
  .addDecorator(withKnobs)
  .add('Transitions', () => {

    const duration = number('duration', 300);
    const x = number('(Fly) x', 0, {
      range: true,
      min: -200,
      max: 200,
      step: 1,
    });
    const y = number('(Fly) y', 20, {
      range: true,
      min: -200,
      max: 200,
      step: 1,
    });
    const from = number('(Scale) from', 0.5, {
      range: true,
      min: 0,
      max: 1,
      step: 0.1,
    });
    const to = number('(Scale) to', 1, {
      range: true,
      min: 0,
      max: 1,
      step: 0.1,
    });

    return {
      Component: TransitionView,
      data:{
        duration,
        x,y,
        from, to
      }
    }
  })