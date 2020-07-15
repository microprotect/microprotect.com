import React from 'react';

import { useIntl } from 'gatsby-plugin-intl';

import Layout from '../../layouts/ProjectLayout';

import en from '../../data/compulsory-insurance.en';
import ko from '../../data/compulsory-insurance.ko';

const contents = { en, ko };

export default function CompulsoryInsurancePage() {
  const intl = useIntl();

  return (
    <Layout
      name="compulsory-insurance"
      contents={contents[intl.locale]}
    />
  );
}
