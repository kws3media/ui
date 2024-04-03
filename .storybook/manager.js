import { addons } from "@storybook/manager-api";
import kwsTheme from "./kwsTheme";

addons.setConfig({
  // isFullscreen: true,
  // showNav: false,
  // showPanel: true,
  theme: kwsTheme,
  // panelPosition: 'right',
  // sidebarAnimations: true,
  // enableShortcuts: true,
  isToolshown: true,
  // theme: undefined,
  // selectedPanel: undefined,
  // initialActive: 'sidebar',
  // showRoots: false,
  name: "UI | KWS3 Media",
  url: "https://kws3.media",
  hierarchyRootSeparator: /\|/,
  sidebar: {
    filters: {
      patterns: (item) => {
        return !item.tags.includes("isHidden");
      },
    },
  },
});
