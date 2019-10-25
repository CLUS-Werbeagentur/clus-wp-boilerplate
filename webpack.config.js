const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

const HMR = require('./compiler/hmr')

const context = './assets'
const outputFolder = './assets'

// context: 'assets',
// entry: {
//   styles: './styles/main.scss',
//   scripts: './scripts/main.js'
// },
// devtool: 'cheap-module-eval-source-map',
// outputFolder: '../assets',
// publicFolder: 'assets',
// proxyTarget: 'http://wp4wp.loc',
// watch: ['../**/*.php']

module.exports = options => {
  const { dev } = options
  const hmr = HMR.getClient()

  return {
    mode: dev ? 'development' : 'production',
    devtool: dev ? 'cheap-module-eval-source-map' : false,
    context: 'assets',
    entry: {
      'styles/main': dev ? [hmr, './assets/styles/main.scss'] : './assets/styles/main.scss',
      'scripts/main': dev ? [hmr, './assets/scripts/main.js'] : './assets/scripts/main.js'
    },
    output: {
      path: './build',
      publicPath: './',
      filename: '[name].js'
    },
    plugins: [
      ...(dev
        ? [new webpack.HotModuleReplacementPlugin(), new FriendlyErrorsWebpackPlugin()]
        : [
            new MiniCssExtractWebpackPlugin({
              filename: '[name].css'
            }),
            new NonJsEntryCleanupPlugin({
              context: 'styles',
              extensions: 'js',
              includeSubfolders: true
            }),
            new CleanWebpackPlugin([path.resolve(outputFolder)], {
              allowExternal: true,
              beforeEmit: true
            }),
            new CopyWebpackPlugin(
              [
                {
                  from: path.resolve(`${context}/**/*`),
                  to: path.resolve(outputFolder)
                }
              ],
              {
                ignore: ['*.js', '*.ts', '*.scss', '*.css']
              }
            )
          ])
    ],
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
          test: /\.(scss|sass)$/,
          enforce: 'pre',
          loader: 'import-glob-loader'
        },
        {
          test: /\.(scss|sass)$/,
          exclude: /node_modules/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [require('autoprefixer')]
              }
            },
            'sass-loader'
          ]
        },
        {
          test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: '/fonts'
              }
            }
          ]
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: '/images'
              }
            }
          ]
        }
      ]
    },
    stats: {
      chunks: false,
      children: false,
      cachedAssets: false
    }
  }
}
