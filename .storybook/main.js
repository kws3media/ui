export default {
  stories: [
    "../src/stories/_index/index.stories.mdx",
    "../src/stories/_index/index*.stories.*",
    "../src/stories/_index/changelog.stories.mdx",
    "../src/stories/index.stories.js",
    "../src/stories/**/*.stories.*",
  ],
  logLevel: "debug",
  features: {
    legacyMdx1: true,
    storyStoreV7: true,
    interactionsDebugger: true,
    previewMdx2: true,
  },
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-actions",
    "@storybook/addon-interactions",
    "@storybook/addon-viewport",
    "@storybook/addon-svelte-csf",
  ],
  framework: "@storybook/svelte-vite",
  docs: {
    autodocs: "tag",
  },
};
