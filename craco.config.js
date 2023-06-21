const webpack = require('webpack');
const packageJson = require('./package.json');

module.exports = {
  plugins: [
    {
      plugin: require('craco-plugin-scoped-css'),
    },
  ],
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.plugins.push(
        new webpack.DefinePlugin({
          'process.env.VERSION': JSON.stringify(packageJson.version),
        })
      );
      return webpackConfig;
    },
  },
}