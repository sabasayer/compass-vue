var webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {
  VueLoaderPlugin
} = require('vue-loader');

var config = require('../package.json');

const isProd = process.env.NODE_ENV === 'production'

const cssLoaders = [
  MiniCssExtractPlugin.loader,
  { loader: 'css-loader', options: { sourceMap: !isProd } },
  { loader: 'stylus-loader', options: { sourceMap: !isProd } }
]

module.exports = {
  mode: 'production',
  target: 'node', // in order to ignore built-in modules like path, fs, etc. 
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  entry: { 'main': './src/index.ts' },
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: 'vue-loader'
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.styl(us)?$/,
        use: cssLoaders
      }
    ],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          minSize: 0
        }
      }
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({
      'VERSION': JSON.stringify(config.version),
    }),
  ],
};
