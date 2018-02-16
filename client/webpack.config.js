'use strict'

require('dotenv').config()

const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: {
    bundle: './src/scripts/main.jsx',
    'staticPage': './src/view/staticPage/staticPage.js',
    'module1': './src/view/module1/module1.js',
    'loadScripts': './src/view/loadScripts.js'
  },

  output: {
    filename: '[name].js',
    library: '[name]'
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  module: {
    rules: [
      { test: /\.jsx$|\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },

  plugins: [
    new UglifyJsPlugin({test: process.env.DEV ? /\.disabled/ : /\.js$/}),
    new webpack.ProvidePlugin({
      React: process.env.DEV ? 'react/umd/react.development.js' : 'react/umd/react.production.min.js',
      ReactDOM: process.env.DEV ? 'react-dom/umd/react-dom.development.js' : 'react-dom/umd/react-dom.production.min.js'
    })
  ],

  // devtool: process.env.DEV ? 'source-map' : '', // for IE and EDGE debug
  // devtool: process.env.DEV ? 'eval-source-map' : ''
}
