const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src'),
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'public/'),
    filename: 'bundle.js',
  },
  resolve: {
    alias: {
      common: path.resolve(__dirname, 'src/common/'),
      content: path.resolve(__dirname, 'assets/content/'),
    },
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
};
