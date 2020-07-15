import React from 'react';

import { useIntl } from 'gatsby-plugin-intl';

// import styled from '@emotion/styled';

import Layout from '../../layouts/ProjectLayout';

import en from '../../data/self-employed-insurance.en';
import ko from '../../data/self-employed-insurance.ko';

const contents = { en, ko };

export default function SelfEmployedInsurancePage() {
  const intl = useIntl();

  return (
    <Layout
      name="self-employed-insurance"
      title="Self-employed insurance / new startup system"
      partner="Partner Korea Credit Data (KCD)"
      contents={contents[intl.locale]}
    />
  );
}
