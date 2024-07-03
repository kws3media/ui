import { themes } from "@storybook/theming";
import { lightTheme, darkTheme } from "./kwsTheme";
import { useDarkMode } from "storybook-dark-mode";
import "./../src/scss/app.scss";

export const decorators = [
  (Story) => {
    const isDarkMode = useDarkMode();
    const theme = isDarkMode ? "dark" : "light";
    document.body.setAttribute("data-theme", theme);
    return Story();
  },
];

export const parameters = {
  darkMode: {
    dark: { ...themes.dark, ...darkTheme },
    light: { ...themes.light, ...lightTheme },
    current: "light",
    stylePreview: true,
  },
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
