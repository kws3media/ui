import { addons } from "@storybook/manager-api";
import { lightTheme, darkTheme } from "./kwsTheme";

addons.setConfig({
  theme: lightTheme,
  isToolshown: true,
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

// Add theme switcher
addons.setConfig({
  themeSwitcher: {
    themes: [
      { id: "light", title: "Light", theme: lightTheme },
      { id: "dark", title: "Dark", theme: darkTheme },
    ],
  },
});
