const path = require('path')

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/' // for no 404 error with react router
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  //
  devServer: {
    contentBase: path.join(__dirname, '/client'),
    // port: 8080,
    publicPath: '/build/',
    proxy: {
      '/': 'http://localhost:3000',
    },
    historyApiFallback: true, // for no 404 error with react router
  },
  // devtool: "eval-source-map",
}

