const path = require('path');
const nodeExternals = require('webpack-node-externals');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

module.exports = {
  entry: './src/test.ts',
  mode: 'production', // development
  module: {
    rules: [
      {
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                targets: {
                  browsers: ['defaults'],
                },
              }],
              '@babel/preset-typescript',
            ],
            plugins: [
              '@babel/plugin-proposal-class-properties',
              '@babel/proposal-object-rest-spread',
              'lodash',
            ],
          },
        },
      },
    ],
  },
  devtool: 'source-map',
  // externals: [nodeExternals()],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    library: 'Test',
    libraryTarget: 'var',
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
  },
  node: {
    __dirname: false,
  },
  plugins: [
    new LodashModuleReplacementPlugin(),
  ],
};
