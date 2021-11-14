import path from "path";
import { Configuration, HotModuleReplacementPlugin } from "webpack";

import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ESLintPlugin from "eslint-webpack-plugin";
import MiniCSSExtractPlugin from 'mini-css-extract-plugin';

const isDevelopment = process.env.NODE_ENV === 'development';
const config: Configuration = {
  mode: "development",
  output: {
    publicPath: "/",
  },
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.css?$/,
        use: [...(isDevelopment ? ['style-loader'] : [MiniCSSExtractPlugin.loader] ), 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new HotModuleReplacementPlugin(),
    new ForkTsCheckerWebpackPlugin({
      async: false
    }),
    new ESLintPlugin({
      extensions: ["tsx", "ts", "js"],
    }),
    ...(isDevelopment ? [] : [new MiniCSSExtractPlugin()])
  ],
  devtool: "inline-source-map",
  devServer: {
    static: path.join(__dirname, "dist"),
    historyApiFallback: true,
    port: 3000,
    open: true,
    hot: true
  },
};

export default config;
