function getStyleUse(bundleFilename) {
  return [
    {
      loader: 'file-loader',
      options: {
        name: bundleFilename,
      },
    },
    { loader: 'extract-loader' },
    { loader: 'css-loader' },
    {
      loader: 'sass-loader',
      options: {
        includePaths: ['./node_modules'],
        implementation: require('dart-sass'),
        fiber: require('fibers'),
  }
    },
  ];
}

module.exports = [
  {
    entry: './index.scss',
    output: {
      // This is necessary for webpack to compile, but we never reference this js file.
      filename: 'style-bundle-comm.js',
    },
    module: {
      rules: [{
        test: /index.scss$/,
        use: getStyleUse('bundle-index.css')
      }]
    },
  },
  {
    entry: './home.scss',
    output: {
      // This is necessary for webpack to compile, but we never reference this js file.
      filename: 'style-bundle-home.js',
    },
    module: {
      rules: [{
        test: /home.scss$/,
        use: getStyleUse('bundle-home.css')
      }]
    },
  },
  {
    entry: "./index.js",
    output: {
      filename: "bundle-index.js"
    },
    module: {
      loaders: [{
        test: /index.js$/,
        loader: 'babel-loader',
        query: {presets: ['env']}
      }]
    },
  },
  {
    entry: "./home.js",
    output: {
      filename: "bundle-home.js"
    },
    module: {
      loaders: [{
        test: /home.js$/,
        loader: 'babel-loader',
        query: {presets: ['env']}
      }]
    },
  }
];
