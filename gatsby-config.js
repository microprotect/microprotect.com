module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-intl',
      options: {
        path: `${__dirname}/src/locales`,
        languages: ['en', 'ko'],
        defaultLanguage: 'en',
        redirect: true,
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
