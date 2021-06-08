const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// hot reload plugin?
// devServer proxy for API calls (and package.json proxy?)
// image loader?

module.exports = {
  mode: process.env.NODE_ENV,
  entry: path.join(__dirname, './src/index.js'),
  output: {
    path: path.join(__dirname, './build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './public/index.html'),
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, './build'),
    proxy: {
      '/api': 'http://localhost:3000'
    }
  },
};
