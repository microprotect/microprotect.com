import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { render as testRender } from '@testing-library/react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { IntlProvider } from 'react-intl';

import { IntlContextProvider } from 'gatsby-plugin-intl';

import _ from 'lodash';

import en from '../locales/en.json';
import ko from '../locales/ko.json';

const messages = {
  en,
  ko,
};

function generateMessages(language) {
  const aux = (prefix, node) => _.reduce(node, (acc, value, key) => ({
    ...acc,
    ...(
      _.isPlainObject(value)
        ? aux(`${prefix}${key}.`, value)
        : { [`${prefix}${key}`]: value }
    ),
  }), {});

  return aux('', messages[language]);
}

export function render(element, { language = 'en' } = {}) {
  return testRender((
    <IntlProvider
      locale={language}
      messages={generateMessages(language)}
    >
      <IntlContextProvider value={{ language, routed: true }}>
        {element}
      </IntlContextProvider>
    </IntlProvider>
  ));
}

// TODO: delete this
export default {};
