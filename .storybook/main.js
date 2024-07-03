import sveltePreprocess from "svelte-preprocess";

export default {
  stories: [
    "../src/stories/_index/index.mdx",
    "../src/stories/_index/index*.*",
    "../src/stories/_index/changelog.mdx",
    "../src/stories/index.stories.js",
    "../src/stories/**/*.mdx",
    "../src/stories/**/*.@(mdx|stories.*)",
  ],
  logLevel: "debug",
  features: {
    interactionsDebugger: true,
  },
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-actions",
    "@storybook/addon-interactions",
    "@storybook/addon-viewport",
    "@storybook/addon-links",
    "@storybook/preset-svelte",
    "@storybook/addon-controls",
    "@storybook/theming",
    "@storybook/blocks",
    "@storybook/addon-mdx-gfm",
    "@storybook/addon-themes",
    "storybook-dark-mode",
  ],
  svelteOptions: {
    preprocess: sveltePreprocess(),
  },
  core: {
    builder: "@storybook/builder-vite",
  },
  framework: {
    name: "@storybook/svelte-vite",
    options: {},
  },
  docs: {
    autodocs: true,
  },
  // async viteFinal(config, { configType }) {
  //   config.plugins
  //     .push
  //     // Example Vite plugin usage
  //     // yourVitePlugin({ option: 'value' })
  //     ();
  //   // Example modification of Vite config
  //   config.resolve.alias["~"] = path.resolve(__dirname, "../src");
  //   return config;
  // },
};
