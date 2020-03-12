/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import Header from './Header';
import Footer from './Footer';
import HeaderPanel from '../v4/HeaderPanel';
import Donation from '../v4/Donation';
import WhyDonate from '../v4/WhyDonate';
import HowDonate from '../v4/HowDonate';
import SubscriptionInsurance from '../v4/SubscriptionInsurance';
import Features from '../v4/Features';
import HowWorks from '../v4/HowWorks';

import {
  BASE_MQ,
} from '../../styles/constants-v5';

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
      <Header />
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
