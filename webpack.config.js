const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'view/scripts'),
    filename: 'index.bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, "misc"),
    compress: true,
    port: 2000
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ]
  },
  devtool: 'eval-source-map',
  mode: 'development',
};