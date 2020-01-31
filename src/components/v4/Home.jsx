/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import Header from './Header';
import Footer from '../FooterV2';
import HeaderPanel from './HeaderPanel';
import Donation from './Donation';
import WhyDonate from './WhyDonate';
import SubscriptionInsurance from './SubscriptionInsurance';
import Features from './Features';
import HowWorks from './HowWorks';
import Partners from './Partners';
import AboutUs from './AboutUs';

import { backgroundColor } from '../../styles/constants-v4';

const styles = {
  container: {
    backgroundColor,
  },
};

export default function Home({ t, locale }) {
  return (
    <div css={styles.container}>
      <Header locale={locale} />
      <HeaderPanel t={t} />
      <Donation t={t} />
      <WhyDonate t={t} />
      <SubscriptionInsurance t={t} />
      <Features t={t} />
      <HowWorks t={t} />
      <Partners t={t} />
      <AboutUs t={t} />
      <Footer t={t} />
    </div>
  );
}
