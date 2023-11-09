//import { mergeConfig } from "vite";
import path from "path";
import sveltePreprocess from "svelte-preprocess";

export default {
  stories: [
    "../src/stories_new/_index/index.stories.mdx",
    "../src/stories_new/_index/index*.stories.*",
    "../src/stories_new/_index/changelog.stories.mdx",
    "../src/stories_new/index.stories.js",
    "../src/stories_new/**/*.mdx",
    "../src/stories_new/**/*.stories.*",
  ],
  logLevel: "debug",
  features: {
    //legacyMdx1: true,
    //storyStoreV7: true,
    interactionsDebugger: true,
    //previewMdx2: true,
  },
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-svelte-csf",
    "@storybook/addon-actions",
    "@storybook/addon-interactions",
    "@storybook/addon-viewport",
    "@storybook/addon-links",
    "@storybook/preset-svelte",
    "@storybook/addon-controls",
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
