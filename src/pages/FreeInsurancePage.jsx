/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import Header from '../components/Header';
import Footer from '../components/Footer';
import HeaderPanel from '../components/free-insurance/HeaderPanel';
import Donation from '../components/free-insurance/Donation';
import WhyDonate from '../components/free-insurance/WhyDonate';
import HowDonate from '../components/free-insurance/HowDonate';
import SubscriptionInsurance from '../components/free-insurance/SubscriptionInsurance';
import Features from '../components/free-insurance/Features';
import HowWorks from '../components/free-insurance/HowWorks';

import { BASE_MQ } from '../styles/constants-v5';

const styles = {
  container: {
    [BASE_MQ]: {
      fontSize: '.7em',
    },
  },
};

export default function FreeInsurancePage({ t, locale }) {
  return (
    <>
      <Header fill />
      <div css={styles.container}>
        <HeaderPanel t={t} />
        <Donation t={t} />
        <WhyDonate t={t} />
        <HowDonate t={t} locale={locale} />
        <SubscriptionInsurance t={t} />
        <Features t={t} />
        <HowWorks t={t} />
      </div>
      <Footer t={t} />
    </>
  );
}
