var webpackConfig = require('./webpack.config.js')

module.exports = function(config) {
  config.set({
    frameworks: ['mocha'],

    files: [
      'test/**/*.spec.js'
    ],

    preprocessors: {
      '**/*.spec.js': ['webpack', 'sourcemap']
    },

    webpack: webpackConfig,

    reporters: ['spec', 'coverage'],

    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' }
      ]
    },

    browsers: [
      // 'Chrome',
      'VirtualBoxIE11onWin8'
    ],

    customLaunchers: {
      VirtualBoxIE11onWin8: {
        base: 'VirtualBoxIE11',
        keepAlive: true,
        snapshot: 'pristine',
        uuid: 'fc2b35a6-0f88-4576-ac15-814a4022af3f'
      }
    },

    browserConsoleLogOptions: {
      level: 'log',
      format: '%b %T: %m',
      terminal: true
    },
  })
}
