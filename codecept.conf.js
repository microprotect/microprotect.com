exports.config = {
  tests: './test/*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost:9999',
      show: false,
    },
  },
  include: {
    I: './test/steps_file.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'microprotect.com',
};
