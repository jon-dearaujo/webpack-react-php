module.exports = {
  entry: {
    Index: './index.js.jsx',
  },
  output: {
    path: './',
    filename: '[name].bundled.js',
    publicPath: './',
    //key point! - Turns webpack bundle output to a library, available as a global variable
    libraryTarget: 'var',
    /*key point! - Global variable will be available on the html which includes the bundle output
      Inside th Global object the outputs and its functions will be available. Ex: Global.Index.render()
     */
    library: ['Global', '[name]']
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