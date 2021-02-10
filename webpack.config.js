var path = require('path');
const {VueLoaderPlugin} = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: ["babel-polyfill", "./src/index.js"],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules(?!\/vuex-composition-helpers)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      // {
      //   test: /\.tsx?$/,
      //   use: {
      //     loader: 'ts-loader',
      //     options: {
      //       appendTsSuffixTo: [/\.vue$/],
      //       appendTsxSuffixTo: [/\.vue$/]
      //     }
      //   }
      // },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader?name=assets/[name].[ext]',
          },
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ],
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
        template: 'index.html'
      }),
    new MiniCssExtractPlugin({
        filename: 'styles.css',
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new HtmlMinimizerPlugin()
    ],
  },
  resolve: {
    extensions: ['.js', '.vue', '.ts', '.tsx'],
    plugins: [
        new DirectoryNamedWebpackPlugin(true)
    ]
  }
};
