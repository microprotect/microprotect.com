/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import Header from '../components/Header';
import Footer from '../components/Footer';
import HeaderPanel from '../components/insurance/HeaderPanel';
import Introduction from '../components/insurance/Introduction';

export default function InsurancePage({ t, product }) {
  return (
    <>
      <Header />
      <HeaderPanel t={t} product={product} />
      <Introduction t={t} product={product} />
      <Footer t={t} />
    </>
  );
}
