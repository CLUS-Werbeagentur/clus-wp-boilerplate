require('dotenv').config()
const webpack = require('webpack')
const path = require('path')
const chokidar = require('chokidar')

// Configure dev server
const configureDevServer = () => {
  return {
    contentBase: path.join(__dirname, 'build'),
    host: 'localhost',
    hot: true,
    open: true,
    inline: true,
    overlay: true,
    port: 3000,
    proxy: {
      '**': {
        target: process.env.URL,
        changeOrigin: true,
        headers: {
          'X-Dev-Server-Proxy': process.env.URL
        }
      }
    },
    // Watch php files and reload window on change
    before(app, server) {
      const files = ['**/*.php']
      chokidar
        .watch(files, {
          alwaysStat: true,
          atomic: false,
          followSymlinks: false,
          ignoreInitial: true,
          ignorePermissionErrors: true,
          persistent: true,
          usePolling: true
        })
        .on('all', () => {
          server.sockWrite(server.sockets, 'content-changed')
        })
    }
  }
}

// Export settings
module.exports = {
  devServer: configureDevServer(),
  devtool: 'inline-cheap-module-source-map',
  entry: process.env.ENTRY,
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.s[c|a]ss$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
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
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: path.join(__dirname, '/build'),
            publicPath: 'http://localhost:3000/'
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
  plugins: [new webpack.HotModuleReplacementPlugin()],
  stats: 'minimal'
}
