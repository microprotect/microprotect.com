/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import Header from './Header';
import Footer from '../FooterV2';
import HeaderPanel from './HeaderPanel';
import Donation from './Donation';
import SubscriptionInsurance from './SubscriptionInsurance';
import Features from './Features';
import HowWorks from './HowWorks';
import Partners from './Partners';

export default function Home({ t, locale }) {
  return (
    <>
      <Header locale={locale} />
      <HeaderPanel t={t} />
      <Donation t={t} />
      <SubscriptionInsurance t={t} />
      <Features t={t} />
      <HowWorks t={t} />
      <Partners t={t} />
      <Footer t={t} />
    </>
  );
}
