import React from 'react';

import { useIntl } from 'gatsby-plugin-intl';

import Layout from '../../layouts/AboutLayout';

import en from '../../data/approach.en';
import ko from '../../data/approach.ko';

const contents = { en, ko };

export default function ApproachPage() {
  const intl = useIntl();

  return (
    <Layout
      image="about.approach"
      title={intl.formatMessage({ id: 'about.approach.title' })}
      contents={contents[intl.locale]}
    />
  );
}
