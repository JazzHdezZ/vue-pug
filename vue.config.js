/* eslint-disable linebreak-style */
const webpack = require('webpack');

module.exports = {
  runtimeCompiler: true,
  configureWebpack: {
    resolve: { symlinks: false },
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jquery: 'jquery',
        'window.jQuery': 'jquery',
        jQuery: 'jquery',
      }),
    ],
  },
  chainWebpack: (config) => {
    // GraphQL Loader
    config.module
      .rule('pug')
      .test(/\.pug$/)
      .use('pug-plain-loader')
      .loader('pug-plain-loader')
      .end();
  },
};
