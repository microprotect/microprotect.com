/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import Header from './Header';
import InsuranceHeaderPanel from './InsuranceHeaderPanel';
import Tab from './Tab';
import Footer from '../FooterV2';

export default function InsurancePage({ t, product }) {
  return (
    <>
      <Header />
      <InsuranceHeaderPanel t={t} product={product} />
      <Tab t={t} product={product} />
      <Footer t={t} />
    </>
  );
}
