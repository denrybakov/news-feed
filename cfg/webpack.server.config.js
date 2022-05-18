const path = require('path')
const { DefinePlugin } = require('webpack')
const nodeExternals = require('webpack-node-externals')

const NODE_ENV = process.env.NODE_ENV

const GLOBAL_CSS_REGEXP = /\.global\.css$/

module.exports = {
  mode: NODE_ENV ? NODE_ENV : 'development',
  target: 'node',
  entry: path.resolve(__dirname, '../src/server/server.js'),
  output: {
    path: path.resolve(__dirname, '../dist/server'),
    filename: 'server.bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        use: ['ts-loader']
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]--[hash:base64:5]',
              },
              onlyLocals: true,
            }
          },
        ],
        exclude: GLOBAL_CSS_REGEXP
      },
      {
        test: GLOBAL_CSS_REGEXP,
        use: ['css-loader']
      }
    ]
  },
  externals: [nodeExternals()],
  optimization: {
    minimize: false
  },
  // devtool: IS_DEV ? 'eval': false,
  plugins: [new DefinePlugin({ 'process.env.CLIENT_ID': `'${process.env.CLIENT_ID}'` })],
}
