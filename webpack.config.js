module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist/',
    filename: 'index.js',
    publicPath: '/dist/'
  },
  devtool: '#source-map',
  devServer: {
    contentBase: './',
    port: 8080,
    inline: true
  },
  module: {
    preLoaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'eslint' }
    ],
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' }
    ]
  },
  eslint: {
    configFile: './.eslintrc'
  }
};
