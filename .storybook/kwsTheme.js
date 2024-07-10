import { create } from "@storybook/theming/create";
import { themes } from "@storybook/theming";

const baseTheme = {
  brandTitle: "UI | v3 | KWS3 Media",
  brandUrl: "https://ui.kws3.media",
  brandImage: "https://kws3.media/assets/images/logo.png",
  brandTarget: "_self",
};

const lightTheme = create({
  ...baseTheme,
  base: "light",
});

const darkTheme = create({
  ...baseTheme,
  base: "dark",
  appPreviewBg: "#353b46",
  appContentBg: "#353b46",
});

export const dark = { ...themes.dark, ...darkTheme };
export const light = { ...themes.light, ...lightTheme };
