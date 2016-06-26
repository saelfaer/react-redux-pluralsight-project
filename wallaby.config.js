var wallabyWebpack = require('wallaby-webpack'); // eslint-disable-line no-var

module.exports = function (wallaby) {

  var webpackPostprocessor = wallabyWebpack({ // eslint-disable-line no-var
    // webpack options

    externals: {
      // Use external version of React instead of rebuilding it
      "react": "React"
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    }
  });

  return {
    files: [
      // not required if using PhantomJs2 - http://wallabyjs.com/docs/integration/phantomjs2.html
      {pattern: 'node_modules/phantomjs-polyfill/bind-polyfill.js', instrument: false},
      {pattern: 'node_modules/react/dist/react-with-addons.js', instrument: false},

      {pattern: 'src/**/*.js*', load: false}
    ],

    tests: [
      {pattern: 'test/**/*.test.js*', load: false}
    ],

    compilers: {
      '**/*.js*': wallaby.compilers.babel()
    },

    postprocessor: webpackPostprocessor,

    bootstrap: function () {
      window.__moduleBundler.loadTests();
    }
  };
};
