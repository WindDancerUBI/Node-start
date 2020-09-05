const {merge} = require('webpack-merge')
const webpackBaseConfig = require('./webpack.config.base')
const TerserWebpackPlugin = require('terser-webpack-plugin')

const webpackConfig = merge(webpackBaseConfig, {
  mode: 'production',
  stats: { children:false, warnings: false },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserWebpackPlugin({
        terserOptions: {
          warnings: false,
          // ecma: undefined,
          // parse: {},
          compress: {
            warnings: false,
            drop_console: false,
            dead_code: true,
            drop_debugger: true,
          },
          output: {
            comments: false,
            beautify: false,
          },
          mangle: true, // Note `mangle.properties` is `false` by default.
        },
        parallel: true,
        sourceMap: false,
      }),
    ],
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 3,
          enforce: true
        }
      }
    }
  },
})

module.exports = webpackConfig