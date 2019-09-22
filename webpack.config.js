const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 40000 }
          },
          'image-webpack-loader'
        ]
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ],
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true
  }
}
