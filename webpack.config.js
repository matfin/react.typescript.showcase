const path = require('path');
const nodeExternals = require('webpack-node-externals');

const common = {
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
      },
    ],
  },
  resolve: {
    alias: {
      common: path.resolve(__dirname, 'src/common/'),
      content: path.resolve(__dirname, 'assets/content/'),
    },
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
};

const front = {
  ...common,
  entry: path.resolve(__dirname, 'src'),
  output: {
    path: path.resolve(__dirname, 'public/'),
    filename: 'bundle.js',
  },
  target: 'web',
};

const back = {
  ...common,
  entry: path.resolve(__dirname, 'server'),
  externals: [nodeExternals()],
  node: {
    __dirname: true,
  },
  output: {
    path: path.resolve(__dirname, 'dist/server'),
    filename: 'server.js',
  },
  target: 'node',
};

module.exports = [front, back];
