const path = require('path');

module.exports = {
  stories: ['../src/stories/**/*.stories.*'],
  logLevel: 'debug',
  addons: [
    '@storybook/addon-knobs',
    '@storybook/addon-actions',
    '@storybook/addon-backgrounds',
    '@storybook/addon-viewport',
    '@storybook/addon-essentials'
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
