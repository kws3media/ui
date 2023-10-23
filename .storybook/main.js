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
    "@storybook/addon-actions",
    "@storybook/addon-interactions",
    "@storybook/addon-viewport",
    "@storybook/addon-links",
    "@storybook/preset-svelte",
  ],
  framework: {
    name: "@storybook/svelte-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
