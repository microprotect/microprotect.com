exports.config = {
  tests: './test/*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://microprotect.test',
      show: true,
    },
  },
  include: {
    I: './test/steps_file.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'microprotect.com',
};
