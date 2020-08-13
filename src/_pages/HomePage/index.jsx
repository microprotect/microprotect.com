/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import HomeHeaderPanel from './HeaderPanel';
import Products from './Products';
import MicroCare from './MicroCare';
import InsurancePartners from './InsurancePartners';

export default function HomePage({ t }) {
  return (
    <>
      <Header />
      <HomeHeaderPanel t={t} />
      <Products t={t} />
      <MicroCare t={t} />
      <InsurancePartners t={t} />
      <Footer t={t} />
    </>
  );
}
