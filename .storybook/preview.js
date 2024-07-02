import { withThemeByDataAttribute } from "@storybook/addon-themes";
import "./../src/scss/app.scss";

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "light",
    attributeName: "data-theme",
  }),
];

export const parameters = {
  layout: "centered",
  controls: {
    hideNoControlsWarning: true,
    expanded: false,
  },
  docs: { page: null },
  options: { showPanel: true },
  backgrounds: { disable: true },
  viewMode: "docs",
};
