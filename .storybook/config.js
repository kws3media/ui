import { configure } from '@storybook/svelte';
import { setOptions } from '@storybook/addon-options';

// Used with @storybook/addon-options/register
setOptions({
  name: 'UI | KWS3 Media',
  url:'https://kws3.media',
  hierarchyRootSeparator: /\|/
});

function loadStories() {
  require('../src/stories');

  const req = require.context('../src/stories', true, /\.stories\.js$/);

  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);