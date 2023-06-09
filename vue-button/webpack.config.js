import path from 'path';
import { VueLoaderPlugin } from 'vue-loader';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

const {container} = webpack;
const config = (env = {}) => ({
  // @ts-ignore
  mode: env?.mode ?? 'development',
  cache: false,
  devtool: 'source-map',
  optimization: {
    minimize: false,
  },
  target: 'web',
  
  entry: path.resolve('./src/index.ts'),
  // output: {
  //   path: path.resolve('./dist'),
  //   publicPath: '/dist/'
  // },
  output: {
    publicPath: "https://chang-ch.github.io/mf-source/VueButton/",
  },
  resolve: {
    extensions: ['.vue', '.jsx', '.js', '.ts', '.tsx', '.json'],
    alias: {
      // this isn't technically needed, since the default `vue` entry for bundlers
      // is a simple `export * from '@vue/runtime-dom`. However having this
      // extra re-export somehow causes webpack to always invalidate the module
      // on the first HMR update and causes the page to reload.
      vue: '@vue/runtime-dom',
      "@": path.resolve('src')
    },
  },
  module: {
    rules: [
      { 
        test: /\.tsx$/, 
        use: ['babel-loader']
  },
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {},
          },
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new container.ModuleFederationPlugin({
      name: 'vueButton',
      filename: 'remoteEntry.js',
      remotes: {
      },
      exposes: {
        './VueButton': './src/components/bootstrap',
      },
      shared: {
      },
    }),
    new HtmlWebpackPlugin({
      template: path.resolve('./index.html'),
    }),
    new VueLoaderPlugin(),
  ],
  devServer: {
    static: {
      directory:  path.resolve(),
    },
    compress: true,
    port: 8082,
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
  },
});

export default config;