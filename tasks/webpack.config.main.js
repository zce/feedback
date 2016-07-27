const webpack = require('webpack')
const merge = require('webpack-merge')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const base = require('./webpack.config.base')

module.exports = merge(base, {
  entry: {
    main: ['./app/main.js']
  },
  target: 'electron-main',
  node: {
    __filename: false,
    __dirname: false
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: './app/package.json', to: '.' },
      { from: './app/www', to: './www' },
      { from: './app/node_modules', to: './node_modules' }
    ], {
      ignore: [
        // Doesn't copy any files with a txt extension
        '*.md',
        'LICENSE',
        // Doesn't copy any file, even if they start with a dot
        // { glob: '**/*', dot: true }
      ],

      // By default, we only copy modified files during
      // a watch or webpack-dev-server build. Setting this
      // to `true` copies all files.
      // copyUnmodified: true
    })
  ],
})
