const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './js/main.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Typescript Project',
      template: 'js/template.html'
    })
  ],
  devtool: 'source-map',
  devServer: {
    // contentBase: path.join(__dirname, 'dist'),
    static: {
      directory: path.join(__dirname, './dist')
    },
    compress: true,
    port: 5000,
  },
};
