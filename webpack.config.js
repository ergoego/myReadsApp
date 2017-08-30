const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');
 
const config = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]},
      { test: /\.svg$/, use: 'svg-url-loader'},
      { test: /\.js$/, exclude: /(node_modules)/, use: {
          loader: 'babel-loader', options: {
            presets: ['env', 'react', 'stage-1']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      inject: 'body'
    }),
    /* ENABLE WHEN PROD:*/ // new webpack.optimize.UglifyJsPlugin(),
  ]
}

module.exports = config;