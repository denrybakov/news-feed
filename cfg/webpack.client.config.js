const path = require('path')
const { HotModuleReplacementPlugin } = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const NODE_ENV = process.env.NODE_ENV

const IS_DEV = NODE_ENV === 'development'
const IS_PROD = NODE_ENV === 'production'

const GLOBAL_CSS_REGEXP = /\.global\.css$/

const setupDevtool = () => {
  if (IS_DEV) return 'eval'
  if (IS_PROD) return false
}

module.exports = {

}
