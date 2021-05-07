const base = require('../../webpack.config.base')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = [
  {
    ...base,
    entry: './playground/index.js',
    output: {
      path: path.resolve(__dirname, './playground/dist'),
      filename: 'bundle.js'
    },
    plugins: [new HtmlWebpackPlugin()],
    devServer: {
      contentBase: path.join(__dirname, './playground/dist'),
      compress: true,
      port: 3000
    }
  }
]