const path = require('path');

module.exports = {
  mode: 'development', // or 'production'
  entry: './src/index.js', // Your entry file
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js' // Output bundle file
  },
  target: 'node', // Specify the target environment (Node.js)
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
