const path = require('path');

module.exports = (storybookBaseConfig, configType, defaultConfig) => {
  defaultConfig.module.rules.push({
    test: [/\.stories\.js$/, /index\.js$/],
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    include: [path.resolve(__dirname, '../src')],
    enforce: 'pre',
  });

  defaultConfig.module.rules.push({
    test: /\.scss$/,
    include: path.resolve(__dirname, '../src'),
    use: [
      'style-loader',
      'css-loader',
      'sass-loader'
    ]
  });


  defaultConfig.resolve.modules.push(path.resolve('./packages'))

  return defaultConfig;
};