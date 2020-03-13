/* @jsx jsx */

import React from 'react';

import { useSelector } from 'react-redux';

import { jsx } from '@emotion/core';

import Header from './Header';
import InsuranceHeaderPanel from './InsuranceHeaderPanel';
import InsuranceIntroduction from './InsuranceIntroduction';
import InsuranceCallBanner from './InsuranceCallBanner';
import Footer from './Footer';

export default function InsurancePage({ t, product }) {
  const { tester } = useSelector((state) => ({
    tester: state.tester,
  }));

  return (
    <>
      <Header />
      <InsuranceHeaderPanel t={t} product={product} />
      <InsuranceIntroduction t={t} product={product} tester={tester} />
      <InsuranceCallBanner t={t} product={product} />
      <Footer t={t} />
    </>
  );
}
