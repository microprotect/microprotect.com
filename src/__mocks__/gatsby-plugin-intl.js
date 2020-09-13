const GatsbyPluginIntl = jest.requireActual('gatsby-plugin-intl');

module.exports = {
  ...GatsbyPluginIntl,
  changeLocale: jest.fn(),
};
