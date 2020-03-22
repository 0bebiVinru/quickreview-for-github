const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'lib')
  },
  optimization: {
    minimize: false
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: 'src/manifest.json'
      }
    ])
  ],
  resolve: {
    modules: [path.resolve(__dirname, 'node_modules')],
    extensions: ['.ts', '.tsx', '.json']
  }
};