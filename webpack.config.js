var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],

      include: path.join(__dirname, 'src')
    }, {
      test: /\.scss$/,
      loader: 'style!css!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded&sourceMap=true&sourceMapContents=true&includePaths[]=./node_modules',
    }, {
      test: /\.css$/,
      loader: 'style!css',
    }, {
      test: /\.(woff|svg|ttf|eot)([\?]?.*)$/,
      loader: 'file-loader?name=[name].[ext]',
    },]
  }
};
