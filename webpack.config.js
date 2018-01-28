const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { 
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['env']
        }
      },
      { test: /\.css$/, loader: "style-loader!css-loader" },
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
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