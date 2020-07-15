import React from 'react';

import { useIntl } from 'gatsby-plugin-intl';

import Layout from '../../layouts/AboutLayout';

import en from '../../data/purpose.en';
import ko from '../../data/purpose.ko';

const contents = { en, ko };

export default function PurposePage() {
  const intl = useIntl();

  return (
    <Layout
      image="about.purpose"
      title={intl.formatMessage({ id: 'about.purpose.title' })}
      contents={contents[intl.locale]}
    />
  );
}
