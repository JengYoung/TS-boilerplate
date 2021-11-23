import path from 'path';
import { Configuration, HotModuleReplacementPlugin } from 'webpack';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';
import MiniCSSExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

const MODE_DEVELOPMENT = 'development';
const MODE_PRODUCTION = 'production';
const isDevelopment = process.env.NODE_ENV === MODE_DEVELOPMENT;

const config: Configuration = {
  mode: isDevelopment ? MODE_DEVELOPMENT : MODE_PRODUCTION,
  output: {
    publicPath: '/',
  },
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
            plugins: [
              isDevelopment && require.resolve('react-refresh/babel'),
            ].filter(Boolean),
          },
        },
      },
      {
        test: /\.css?$/,
        use: [
          ...(isDevelopment ? ['style-loader'] : [MiniCSSExtractPlugin.loader]),
          'css-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
    new ESLintPlugin({
      extensions: ['tsx', 'ts', 'js'],
    }),
    ...(isDevelopment
      ? [new HotModuleReplacementPlugin(), new ReactRefreshWebpackPlugin()]
      : [new MiniCSSExtractPlugin()]),
  ],
  devtool: 'inline-source-map',
  devServer: {
    static: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    port: 3000,
    compress: true,
    open: true,
    hot: true,
  }
};

export default config;
