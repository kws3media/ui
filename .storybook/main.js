const path = require("path");
const autoPreprocess = require("svelte-preprocess");

module.exports = {
  stories: ["../src/stories/index.stories.js", "../src/stories/**/*.stories.*"],
  logLevel: "debug",
  features: {
    interactionsDebugger: true,
  },
  addons: [
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
      },
    },
    "@storybook/addon-essentials",
    "@storybook/addon-actions",
    "@storybook/addon-interactions",
    "@storybook/addon-viewport",
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      include: path.resolve(__dirname, "../src"),
      use: ["style-loader", "css-loader", "sass-loader"],
    });

    const svelteLoader = config.module.rules.find(
      (r) => r.loader && r.loader.includes("svelte-loader")
    );
    svelteLoader.options.preprocess = autoPreprocess({});

    config.resolve.modules.push(path.resolve("./packages"));

    return config;
  },
};
