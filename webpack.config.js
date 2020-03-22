const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src'),
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
      }
    ],
  },
  output: {
    path: path.resolve(__dirname, 'build/'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  resolve: {
    alias: {
      content: path.resolve(__dirname, 'assets/content/'),
      common: path.resolve(__dirname, 'src/common/'),
    },
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    historyApiFallback: true,
    hotOnly: true,
    publicPath: 'http://localhost:3000/build/',
    port: 3000,
  },
};
