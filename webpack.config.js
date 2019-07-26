const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const WebpackPwaManifest = require('webpack-pwa-manifest')

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    hot: true,
    open: true,
    port: 3001,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Glukyers',
      template: path.resolve(__dirname, 'src/index.html')
    }),
    new WebpackPwaManifest({
      name: 'Glukyer app',
      short_name: 'Glukyers',
      description: 'Encuentra artistas con Glukyers app',
      background_color: '#009edb',
      theme_color: '#744fdd'
    })
  ]
}
