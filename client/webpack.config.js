/**
 * Структурировать проект
 */

'use strict'

require('dotenv').config()

const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const path = require('path')

module.exports = {
  entry: {
    // Blog section
    blog_main_style: './src/view/blog/blog_main.scss',
    staticPage: './src/view/blog/staticPage/staticPage.js',
    module1: './src/view/blog/module1/module1.js',
    module2: './src/view/blog/module2/module2.js',
    module3: './src/view/blog/module3/module3.js',
    module4: './src/view/blog/module4/module4.js',
    blog_commons: [
      // 'jquery', //example
      './src/lib/createElems.js',
      './src/lib/loadScripts.js',
      './src/lib/waitScript.js'
    ],

    auth_main_style: './src/view/auth/auth_main.scss',
    auth_main: './src/view/auth/main.jsx',
    auth_commons: [
      process.env.DEV ? 'react/umd/react.development.js' : 'react/umd/react.production.min.js',
      process.env.DEV ? 'react-dom/umd/react-dom.development.js' : 'react-dom/umd/react-dom.production.min.js',
      'react-router-dom'
    ]
  },

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
    library: '[name]'
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules')
    ]
  },

  module: {
    rules: [
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
              return '[name].[ext]'
            }
            return '[hash].[ext]'
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
    new CleanWebpackPlugin(['build'], {exclude: ['favicon.ico']}),
    new UglifyJsPlugin({test: process.env.DEV ? /\.disabled/ : /\.js$/}),
    new webpack.ProvidePlugin({
      React: process.env.DEV ? 'react/umd/react.development.js' : 'react/umd/react.production.min.js',
      ReactDOM: process.env.DEV ? 'react-dom/umd/react-dom.development.js' : 'react-dom/umd/react-dom.production.min.js'
      // $: 'jquery'  //example
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'blog_commons',
      chunks: [
        'staticPage',
        'module1',
        'module2',
        'module3',
        'module4'
      ],
      minChunks: Infinity
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'auth_commons',
      chunks: ['auth_main'],
      minChunks: Infinity
    })
  ],

  watch: true,

  watchOptions: {
    aggregateTimeout: 500 // fix ExtractTextPlugin bug
  },

  devtool: process.env.DEV ? 'source-map' : ''
}
