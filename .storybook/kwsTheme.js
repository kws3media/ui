import { create } from "@storybook/theming/create";

const baseTheme = {
  brandTitle: "UI | v3 | KWS3 Media",
  brandUrl: "https://ui.kws3.media",
  brandImage: "https://kws3.media/assets/images/logo.png",
  brandTarget: "_self",
};

export const lightTheme = create({
  ...baseTheme,
  base: "light",
});

export const darkTheme = create({
  ...baseTheme,
  base: "dark",
});
