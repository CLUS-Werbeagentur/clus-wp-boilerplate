require('dotenv').config()
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')

// Export settings
module.exports = {
  devtool: 'none',
  entry: { bundle: process.env.ENTRY },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/env',
                {
                  useBuiltIns: 'entry',
                  corejs: '2'
                }
              ]
            ]
          }
        }
      },
      {
        test: /\.s[c|a]ss$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts'
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images'
            }
          }
        ]
      },
      {
        test: /\.(svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images'
            }
          },
          {
            loader: 'svgo-loader',
            options: {
              plugins: [{ removeTitle: true }, { convertColors: { shorthex: false } }, { convertPathData: false }]
            }
          }
        ]
      }
    ]
  },
  output: {
    filename: 'js/[name].[hash:8].js',
    path: path.join(__dirname, '/build'),
    publicPath: process.env.PUBLIC_PATH
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ManifestPlugin(),
    new MiniCssExtractPlugin({ filename: 'css/[name].[hash:8].css' })
  ],
  optimization: {
    minimizer: [new TerserPlugin()]
  },
  stats: {
    modules: false
  }
}
