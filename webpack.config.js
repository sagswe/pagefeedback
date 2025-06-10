const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'cheap-source-map', // Changed from default 'eval' to 'cheap-source-map'
  entry: {
    popup: './src/popup.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'src/manifest.json' },
        { from: 'src/popup.html' },
        { from: 'src/styles.css' }
      ],
    }),
  ],
};