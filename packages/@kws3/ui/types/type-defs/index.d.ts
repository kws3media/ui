export const Colors = [
  "",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "dark",
  "light",
  "link",
] as const;

export const ExtendedColors = [...Colors, "grey"] as const;
export const BGColors = [...Colors, "transparent"] as const;

export const Sizes = ["", "small", "medium", "large"] as const;

export const Positions = [
  "top",
  "bottom",
  "left",
  "right",
  "start",
  "center",
  "end",
] as const;

export const FontFamilies = [
  "",
  "fa",
  "lar",
  "las",
  "gg",
  "unicons",
  "material",
] as const;

export const FloatiePositions = [
  "",
  "top",
  "bottom",
  "top-left",
  "top-right",
  "bottom-left",
  "bottom-right",
] as const;

export const TippyPositions = [
  "top",
  "top-start",
  "top-end",
  "right",
  "right-start",
  "right-end",
  "bottom",
  "bottom-start",
  "bottom-end",
  "left",
  "left-start",
  "left-end",
  "auto",
  "auto-start",
  "auto-end",
] as const;

export const PopperStrategies = ["fixed", "absolute"] as const;
