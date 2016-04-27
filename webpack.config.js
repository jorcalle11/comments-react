module.exports = {
  entry : './src/main.js',
  outut:{
    path: './src',
    filename: 'bundle.js'
  },
  devServer: {
    inline:true,
    contentBase: './src',
    port: 3333
  },
  module: {
    loaders: [
      {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel'
      }
    ]
  }
};
