const {merge} = require('webpack-merge')
const webpackBaseConfig = require('./webpack.config.base')

const webpackConfig = merge(webpackBaseConfig, {
  devtool: 'eval-source-map',
  mode: 'development',
  stats: { children:false }
})

module.exports = webpackConfig
  
