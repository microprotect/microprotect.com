import React from 'react';

import { useIntl } from 'gatsby-plugin-intl';

import Layout from '../../layouts/ProjectLayout';

import en from '../../data/credit-default-insurance.en';
import ko from '../../data/credit-default-insurance.ko';

const contents = { en, ko };

export default function CreditDefaultInsurancePage() {
  const intl = useIntl();

  return (
    <Layout
      name="credit-default-insurance"
      title="Credit Default Insurance"
      partner="with PEOPLE FUND"
      contents={contents[intl.locale]}
    />
  );
}
