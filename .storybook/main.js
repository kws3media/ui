const path = require('path');

module.exports = {
  stories: ['../src/stories/**/*.stories.*'],
  logLevel: 'debug',
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-actions',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
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
