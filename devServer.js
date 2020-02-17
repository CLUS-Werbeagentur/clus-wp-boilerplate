require('dotenv').config()
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const browserSync = require('browser-sync')

const config = require('./webpack.dev.js')

const bundler = webpack(config)

const middleware = [
  webpackDevMiddleware(bundler, {
    logLevel: 'warn',
    publicPath: config.output.publicPath
  }),
  webpackHotMiddleware(bundler)
]

browserSync({
  notify: true,
  online: true,
  proxy: {
    target: process.env.URL,
    middleware
  },
  files: ['*.php', '**/*.php']
})
