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
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.svg$/,
        use: 'preact-svg-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(woff|woff2|ttf|eot|svg)$/,
        use: 'url-loader',
        exclude: /src/
      }
    ]
  }
}

// noinspection JSUnusedLocalSymbols
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
