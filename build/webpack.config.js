const path = require('path');

const projectRoot = path.resolve(__dirname, '..');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(projectRoot, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/g,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
