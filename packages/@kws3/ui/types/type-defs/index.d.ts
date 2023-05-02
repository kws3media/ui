export const Colors = [
  "",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "dark",
  "light",
] as const;

export const Sizes = ["", "small", "medium", "large"] as const;

export const BGColors = [...Colors, "transparent", "link"] as const;
export const SpinnerColors = [...Colors, "grey"] as const;
