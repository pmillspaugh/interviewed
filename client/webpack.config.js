const path = require('path');
// hot reload plugin
// HtmlWebpackPlugin
// NODE_ENV for mode
// devServer proxy for API calls (and package.json proxy?)
// is output.publicPath needed? https://webpack.js.org/configuration/output/#outputpublicpath
// image loader?
// split into multiple config files?

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, './src/index.js'),
  output: {
    path: path.join(__dirname, './build'),
    publicPath: '/build/',
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
  plugins: [],
  devServer: {
    contentBase: './build',
  },
};
