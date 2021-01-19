// noinspection JSUnresolvedFunction,NodeCoreCodingAssistance
const path = require('path')

const baseConfig = {
  watchOptions: {
    ignored: 'node_modules/**'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: '@svgr/webpack'
      },
      {
        test: /\.(woff|woff2|ttf|eot|svg)$/,
        use: 'url-loader'
      }
    ]
  }
}

const indexConfig = {
  ...baseConfig,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname),
    filename: 'src/dist/bundle.js'
  }
}

const exampleConfig = {
  ...baseConfig,
  entry: './example/index.js',
  output: {
    path: path.resolve(__dirname),
    filename: 'example/dist/bundle.js'
  }
}

// noinspection JSUnresolvedVariable
module.exports = [
  // indexConfig,
  exampleConfig
]
