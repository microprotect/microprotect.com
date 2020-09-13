module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-intl',
      options: {
        path: `${__dirname}/src/locales`,
        languages: ['en', 'ko'],
        defaultLanguage: 'ko',
      },
    },
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [
          'UA-153178350-1',
        ],
        pluginConfig: {
          head: false,
        },
      },
    },
  ],
};
