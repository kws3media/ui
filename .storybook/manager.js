import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

addons.setConfig({
  // isFullscreen: true,
  // showNav: false,
  // showPanel: true,
  theme: create({
    base: 'light',
    brandTitle: 'UI | v3 | KWS3 Media',
    brandImage: 'https://npm.kws3.media/images/logo.png',
  }),
  // panelPosition: 'right',
  // sidebarAnimations: true,
  // enableShortcuts: true,
  // isToolshown: true,
  // theme: undefined,
  // selectedPanel: undefined,
  // initialActive: 'sidebar',
  // showRoots: false,
  // name: 'UI | KWS3 Media',
  // url:'https://kws3.media',
  // hierarchyRootSeparator: /\|/
});