import "./../src/scss/app.scss";

export default {
  parameters: {
    layout: "centered",
    //actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      hideNoControlsWarning: true,
      expanded: false,
    },
    docs: { page: null },
    options: { showPanel: true },
    backgrounds: { disable: true },
    viewMode: "docs",
  },
};
