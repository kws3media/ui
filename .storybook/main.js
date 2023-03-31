const path = require("path");

const autoPreprocess = require("svelte-preprocess");

module.exports = {
  stories: [
    "../src/stories/_index/index.stories.mdx",
    "../src/stories/_index/index*.stories.*",
    "../src/stories/_index/changelog.stories.mdx",
    "../src/stories/index.stories.js",
    "../src/stories/**/*.stories.*",
  ],
  logLevel: "debug",
  features: {
    storyStoreV7: true,
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
    config.resolve.alias = {
      ["~"]: path.resolve(__dirname + "/../src"),
    };
    return config;
  },
  framework: "@storybook/svelte",
};
