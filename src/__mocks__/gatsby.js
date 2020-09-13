/* eslint-disable no-unused-vars */

const React = require('react');

const Gatsby = jest.requireActual('gatsby');

module.exports = {
  ...Gatsby,
  graphql: jest.fn(),
  Link: jest.fn().mockImplementation(
    ({
      activeClassName,
      activeStyle,
      getProps,
      innerRef,
      partiallyActive,
      ref,
      replace,
      to,
      ...rest
    }) => React.createElement('a', {
      ...rest,
      href: to,
    }),
  ),
  StaticQuery: jest.fn(),
  useStaticQuery: jest.fn(),
};
