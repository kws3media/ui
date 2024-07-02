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
  // Add theme switcher with custom labels
  toolbar: {
    "storybook/themes": {
      icon: "circlehollow",
      items: [
        { value: "light", right: "🌞", title: "Light mode" },
        { value: "dark", right: "🌙", title: "Dark mode" },
      ],
      showName: true,
      title: "Theme",
    },
  },
  // Theme configuration
  themes: {
    default: "light",
    list: [
      { name: "light", color: "#F8F8F8", theme: lightTheme },
      { name: "dark", color: "#333333", theme: darkTheme },
    ],
  },
});
