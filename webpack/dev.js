const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
const WebpackDevServer = require('webpack-dev-server');

const env = {
  hot_server_host: '127.0.0.1',
  hot_server_port: 5591
};

const loaders = [
  {
    test: /\.js(x)?$/,
    exclude: /node_modules/,
    loader: 'babel',
    query: {
      presets: ['react', 'es2015', 'stage-0', 'react-hmre']
    }
  },
  {
    test: /\.json$/,
    exclude: /node_modules/,
    loader: 'json'
  },
  {
    test: /\.css$/,
    loader: 'style!css!postcss'
  },
  {
    test: /\.less$/,
    loader: 'style!css!postcss!less'
  }
];

const config = {
  resolve: {
    extensions: ['', '.web.js', '.js', '.jsx']
  },

  entry: [
    `webpack-dev-server/client?http://${env.hot_server_host}:${env.hot_server_port}`,
    'webpack/hot/dev-server',
    './src/client.js'
  ],
  output: {
    path: path.join(__dirname, '/public/build/js'),
    filename: '[name].js',
    publicPath: `http://${env.hot_server_host}:${env.hot_server_port}/`
  },

  // devtool: "eval",
  devtool: 'cheap-module-eval-source-map',

  // What information should be printed to the console
  stats: {
    colors: true
  },

  // The list of plugins for Webpack compiler
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('DEV')
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  // Options affecting the normal modules
  module: {
    // preLoaders: [
    //   {test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/}
    // ],
    loaders
  },

  eslint: {
    // failOnWarning: true,
    // failOnError: true
  },

  // The list of plugins for PostCSS
  // https://github.com/postcss/postcss
  postcss: [
    pxtorem({
      rootValue: 192,
      propWhiteList: []
    }),
    autoprefixer()
  ]
};

const compiler = webpack(config);
const server = new WebpackDevServer(compiler, {
  inline: true,
  hot: true
});
server.listen(env.hot_server_port);
