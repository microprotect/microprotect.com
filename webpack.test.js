const config = require('./webpack.config');

module.exports = {
  ...config,
  devServer: {
    ...config.devServer,
    port: 9999,
  },
};
