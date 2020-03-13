/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import Header from './Header';
import HomeHeaderPanel from './HomeHeaderPanel';
import Products from './Products';
import MicroCare from './MicroCare';
import BenefitShare from './BenefitShare';
import InsurancePartners from './InsurancePartners';
import Footer from './Footer';

export default function Home({ t }) {
  return (
    <>
      <Header />
      <HomeHeaderPanel t={t} />
      <Products t={t} />
      <MicroCare t={t} />
      <BenefitShare t={t} />
      <InsurancePartners t={t} />
      <Footer t={t} />
    </>
  );
}
