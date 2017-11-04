var path = require('path');
var webpack = require('webpack');

var SRC_DIR = path.resolve(__dirname, 'src');
var ROOT_DIR = path.resolve(__dirname, '');

config = {
  entry: SRC_DIR + '/index.js',
  output: {
    path: ROOT_DIR,
    filename: 'main.js',
    libraryTarget: 'commonjs2',
  },


  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [SRC_DIR],
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015'],
          plugins: [ 'transform-es2015-destructuring', 'transform-object-rest-spread' ]
        }
      },
    ],
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
  ]
}

module.exports = [config];
