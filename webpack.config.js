module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            'react',
            [
              'es2015',
              {
                'modules': false
              }
            ],
            'stage-0',
          ],
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', 'index.js', '.jsx', 'index.jsx'],
    modules: ['node_modules']
  },
  devServer: {
    contentBase: './dist',
    port: '8000',
    proxy: {
      '**': {
        bypass: req => ((/\.[a-zA-Z0-9]+$/.test(req.url)) ? req.url : '/index.html'),
      },
    },
  }
};
