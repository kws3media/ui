import { light, dark } from "./kwsTheme";
import { DocsContainer } from "./DocsContainer.js";

import "./../src/scss/app.scss";

export const parameters = {
  darkMode: {
    dark,
    light,
    current: "light",
    stylePreview: true,
    darkClass: ["theme-dark", "dark"],
    lightClass: ["theme-light", "light"],
  },
  layout: "centered",
  controls: {
    hideNoControlsWarning: true,
    expanded: false,
  },
  docs: {
    page: null,
    container: DocsContainer,
  },
  options: { showPanel: true },
  backgrounds: { disable: true },
  viewMode: "docs",
};
