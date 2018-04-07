/**
 * Структурировать проект
 */

'use strict'

require('dotenv').config()

const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const path = require('path')

module.exports = {
  entry: {
    // Blog section
    ExamplePage: './src/static/blog/pages/ExamplePage/ExamplePage.js',

    // Auth section
    auth: './src/react/auth/auth.jsx',
    auth_commons: [
      process.env.DEV ? 'react/umd/react.development.js' : 'react/umd/react.production.min.js',
      process.env.DEV ? 'react-dom/umd/react-dom.development.js' : 'react-dom/umd/react-dom.production.min.js',
      'react-router-dom'
    ]
  },

  output: {
    path: path.resolve(__dirname, 'build'),
    // library: '[name]',
    filename: '[name].js'
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.resolve('./node_modules'),
      // resolve lib dir
      path.resolve('./src/react'),
      path.resolve('./src/static')
    ]
  },

  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: 'pug-loader'
      },
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(css|scss)$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true,
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        })
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'file-loader',
        options: {
          name (file) {
            if (process.env.DEV) {
              return 'img/[name].[ext]'
            }
            return 'img/[hash].[ext]'
          }
        }
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: true
    }),
    new webpack.DefinePlugin({
      DEV: JSON.stringify(process.env.DEV)
    }),
    new CleanWebpackPlugin(['build']),
    new UglifyJsPlugin({test: process.env.DEV ? /\.disabled/ : /\.js$/}),
    new webpack.ProvidePlugin({
      React: process.env.DEV ? 'react/umd/react.development.js' : 'react/umd/react.production.min.js',
      ReactDOM: process.env.DEV ? 'react-dom/umd/react-dom.development.js' : 'react-dom/umd/react-dom.production.min.js'
      // $: 'jquery'  //example
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'auth_commons',
      chunks: ['auth'],
      minChunks: Infinity
    }),
    new CopyWebpackPlugin([
      {
        from: './src/static_img',
        to: './img',
        toType: 'dir'
      }
    ])
  ],

  watch: true,

  watchOptions: {
    aggregateTimeout: 500 // fix ExtractTextPlugin bug
  },

  devtool: process.env.DEV ? 'source-map' : ''
}
