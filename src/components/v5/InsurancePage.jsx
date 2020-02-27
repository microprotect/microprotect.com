/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import Header from './Header';
import InsuranceHeaderPanel from './InsuranceHeaderPanel';
import InsuranceIntroduction from './InsuranceIntroduction';
import InsuranceCoverage from './InsuranceCoverage';
import Footer from '../FooterV2';

export default function InsurancePage({ t, product }) {
  return (
    <>
      <Header />
      <InsuranceHeaderPanel t={t} product={product} />
      <InsuranceIntroduction t={t} product={product} />
      <InsuranceCoverage product={product} />
      <Footer t={t} />
    </>
  );
}
