module.exports = {
  entry: {
    Index: './index.js.jsx',
  },
  output: {
    path: './',
    filename: '[name].bundled.js',
    publicPath: './',
    libraryTarget: 'var', //key point!
    library: ['Global', '[name]'] //key point!
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
    ]
  },
  devServer: {
    inline: true,
    port: 9999
  }
}