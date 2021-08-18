const path = require('path');

module.exports = {
  stories: ['../src/stories/index.stories.js', '../src/stories/**/*.stories.*'],
  logLevel: 'debug',
  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
    '@storybook/addon-essentials',
    '@storybook/addon-actions',
    '@storybook/addon-backgrounds',
    '@storybook/addon-viewport',
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      include: path.resolve(__dirname, '../src'),
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    });

    config.resolve.modules.push(path.resolve('./packages'));

    return config;
  },
};
