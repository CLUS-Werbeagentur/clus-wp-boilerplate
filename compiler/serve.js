const webpack = require('webpack')
const browserSync = require('browser-sync').create()

const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const webpackConfig = require('./../webpack.config')({ dev: true })

const compiler = webpack(webpackConfig)

const middleware = [
  webpackDevMiddleware(compiler, {
    publicPath: './../',
    logLevel: 'silent',
    quiet: true
  }),
  webpackHotMiddleware(compiler, {
    log: false,
    logLevel: 'none'
  })
]

browserSync.init({
  middleware,
  proxy: {
    target: 'http://wp-dev-theme.test',
    middleware
  },
  logLevel: 'silent',
  files: '../**/*.php'
})
