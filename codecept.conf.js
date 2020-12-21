/* eslint-disable import/no-extraneous-dependencies */

const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './test/**/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://localhost:8000',
      show: true,
      browser: 'chromium',
    },
  },
  include: {
    I: './test/steps_file.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'microprotect.com',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true,
    },
    tryTo: {
      enabled: true,
    },
    screenshotOnFail: {
      enabled: true,
    },
  },
};
