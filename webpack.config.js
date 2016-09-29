module.exports = {
  entry: {
    Index: './index.js.jsx',
  },
  output: {
    path: './',
    filename: '[name].bundled.js',
    publicPath: './',
    libraryTarget: 'var', //key point! - Turns webpack bundle output to a library, available as a global variable
    library: ['Global', '[name]'] //key point! - Global variable will be available on the html which includes the bundle output
                                  // Inside th Global object the outputs and its functions will be available. Ex: Global.Index.render()
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