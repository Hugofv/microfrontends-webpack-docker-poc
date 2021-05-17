const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;

const deps = require('./package.json').dependencies;

module.exports = {
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].bundle.js',
  },
  devServer: {
    port: 9000,
    watchContentBase: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /nodeModules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './public/index.html' }),
    new MiniCssExtractPlugin(),
    new ErrorOverlayPlugin(),
    new ModuleFederationPlugin({
      name: 'orchestrator',
      filename: 'remoteEntry.js',
      remotes: {
        module1: "module1@http://localhost/module-1/remoteEntry.js",
        module2: "module2@http://localhost/module-2/remoteEntry.js",
      },
      shared: [
        {
          ...deps,
          react: {
            singleton: true,
            requiredVersion: deps.react,
          },
          "react-dom": {
            singleton: true,
            requiredVersion: deps["react-dom"],
          },
        }
      ]
    }),
  ],
  devtool: 'cheap-module-source-map',

}