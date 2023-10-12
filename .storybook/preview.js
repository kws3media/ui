import "./../src/scss/app.scss";
export const parameters = {
  layout: "centered",
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    hideNoControlsWarning: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
  },
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
