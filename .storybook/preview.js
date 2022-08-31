import "./../src/scss/app.scss";
export const parameters = {
  layout: "centered",
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { hideNoControlsWarning: true },
  docs: { page: null },
  options: { showPanel: true },
  backgrounds: { disable: true },
  viewMode: "docs",
};

/*
themes: {
    //clearable: false,
    default: "Light",
    list: [
      { name: "Light", class: "theme-kws-light", color: "#F6F6F6" },
      { name: "Dark", class: "theme-kws-dark", color: "#333333" },
    ],
    onChange: (theme) => {
      console.log("THEME:", theme);
      // todo : if needed
    },
  },
*/
/**
 * Color of the input
 *  @type {ColorOptions}
 */
const ColorOptions = [
  "",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "dark",
  "light",
];

const SizeOptions = ["", "small", "medium", "large"];
export const argTypes = {
  color: { control: "select", options: ColorOptions },
  size: { control: "select", options: SizeOptions },
};
