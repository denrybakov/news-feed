const express = require('express')
const webpack = require('webpack')
const nodemon = require('nodemon')
const path = require('path')

const [clientConfig, serverConfig] = require('../webpack.config')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const hmrServer = express()
const clientCompiler = webpack(clientConfig)

const HMR_PORT = 3001

hmrServer.use(webpackDevMiddleware(clientCompiler, {
  publicPath: clientConfig.output.publicPath,
  serverSideRender: true,
  noInfo: true,
  writeToDisk: true,
  stats: 'errors-only',
  watchOptions: {
    ignore: /dist/,
  },
}))

hmrServer.use(webpackHotMiddleware(clientCompiler, {
  path: '/static/__webpack_hmr',
}))

hmrServer.listen(HMR_PORT, () => {
  console.log(`Сервер HMR работает на ${HMR_PORT}`)
})

const compiler = webpack(serverConfig)

compiler.run((err) => {
  err ? console.log(`Ошибка компиляции:`, err) : null

  compiler.watch({}, (err) => {
    err ? console.log(`Неуспешная компиляция:`, err) : null
    console.log('Компиляция прошла успешно')
  });

  nodemon({
    script: path.resolve(__dirname, '../dist/server/server.bundle.js'),
    watch: [
      path.resolve(__dirname, '../dist/server'),
      path.resolve(__dirname, '../dist/client')
    ]
  })
})
