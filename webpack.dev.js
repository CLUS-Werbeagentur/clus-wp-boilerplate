require('dotenv').config()
const webpack = require('webpack')
const path = require('path')
const StylelintPlugin = require('stylelint-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const autoprefixer = require('autoprefixer')

// Export settings
module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: {
    bundle: ['webpack-hot-middleware/client', process.env.ENTRY]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'assets/scripts'),
        use: [{ loader: 'babel-loader' }],
        resolve: { extensions: ['.js', '.jsx'] }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        include: path.resolve(__dirname, 'assets/styles'),
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              ident: 'postcss',
              plugins: [autoprefixer()]
            }
          },
          { loader: 'resolve-url-loader' },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          },
          { loader: 'import-glob-loader' }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg|png|jpg|gif)(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]'
          }
        }
      }
    ]
  },
  output: {
    filename: 'dev-bundle.js',
    path: path.join(__dirname, '/build'),
    publicPath: '/'
  },
  plugins: [
    new FriendlyErrorsPlugin(),
    new StylelintPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}
