require('dotenv').config()
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const StylelintPlugin = require('stylelint-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')

// Export settings
module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: { bundle: process.env.ENTRY },
  stats: {
    all: false,
    modules: true,
    maxModules: 0,
    hash: true,
    timings: true,
    assets: true,
    assetsSort: '!size',
    performance: true
  },
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }, { loader: 'eslint-loader' }],
        resolve: { extensions: ['.js', '.jsx'] }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                autoprefixer(),
                cssnano({
                  preset: 'default',
                  discardComments: {
                    removeAll: true
                  }
                })
              ],
              minimize: true
            }
          },
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          },
          'import-glob-loader'
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts',
              name: '[hash:12].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              outputPath: 'images',
              name: '[hash:12].[ext]'
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
              outputPath: 'images',
              name: '[hash:12].[ext]'
            }
          },
          {
            loader: 'svgo-loader',
            options: {
              plugins: [
                { removeTitle: true },
                { convertColors: { shorthex: false } },
                { convertPathData: false }
              ]
            }
          }
        ]
      }
    ]
  },
  output: {
    filename: 'js/[name].[hash:12].js',
    path: path.join(__dirname, '/build'),
    publicPath: process.env.PUBLIC_PATH
  },
  plugins: [
    new FriendlyErrorsPlugin(),
    new CleanWebpackPlugin(),
    new StylelintPlugin(),
    new ManifestPlugin({
      filter: file =>
        !file.path.match(/\.(woff(2)?|ttf|eot|svg|png|jpg|gif|map)(\?v=\d+\.\d+\.\d+)?$/)
    }),
    new MiniCssExtractPlugin({ filename: 'css/[name].[hash:12].css' })
  ]
}
