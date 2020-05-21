const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const optimization = () => {
  const config = {};
  if (isProd) {
    config.minimizer = [
      new OptimizeCssAssetsWebpackPlugin(),
      new TerserWebpackPlugin({extractComments: false})
    ]
  }
  return config;
};

module.exports = {
  devtool: isDev ? 'source-map' : false,
  devServer: {
    port: 8080, // http://localhost:8080/
    historyApiFallback: true,
    hot: isDev
  },
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name]-[hash:4].js'
  },
  optimization: optimization(),

  module: {
    rules: [
      // JS
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },

      // JSON
      {
        test: /\.(json)$/,
        exclude: /node_modules/,
        use: [{
          loader: "file-loader",
          options: {
            outputPath: "data",
            name: "[name]-[sha1:hash:4].[ext]"
          }
        }]
      },

      // CSS
      {
        test: /\.(css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: isDev,
              reloadAll: true
            }
          },
          {
            loader: "css-loader"
          }
        ]
      },

      // IMG
      {
        test: /\.(png|ico|jpg|jpeg|gif|webp|svg)$/,
        use: [{
          loader: "file-loader",
          options: {
            outputPath: "img",
            name: "[name]-[sha1:hash:4].[ext]"
          }
        }]
      },

      // FONTS
      {
        test: /\.(ttf|woff|woff2|eot|otf)$/,
        use: [{
          loader: "file-loader",
          options: {
            outputPath: "fonts",
            name: "[name].[ext]"
          }
        }]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      buildTime: new Date().toString(),
      template: "./src/index.html",
      minify: {
        collapseWhitespace: isProd
      },
      favicon: "./src/img/favicon.png"
    }),
    new MiniCssExtractPlugin({
      filename: "main-[hash:4].css"
    }),
    // new CopyPlugin([
    //   { from: 'src/404.html', to: '' },
    // ])
  ]
};