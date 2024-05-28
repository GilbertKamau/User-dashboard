const path = require('path');

module.exports = {
  // other configurations
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      // other loaders
    ],
  },
  watchOptions: {
    ignored: /node_modules|\.git|C:\\hiberfil\.sys/, // Ignore node_modules, .git, and system files
    poll: 1000, // Check for changes every second
  },
  // other configurations
};
