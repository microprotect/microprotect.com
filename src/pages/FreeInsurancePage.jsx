/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import Header from '../components/Header';
import Footer from '../components/Footer';

import HeaderPanel from '../components/free-insurance/HeaderPanel';
import Dome from '../components/free-insurance/Dome';
import WhyDonate from '../components/free-insurance/WhyDonate';
import HowDonate from '../components/free-insurance/HowDonate';
import Donation from '../components/free-insurance/Donation';

import AboutUs from './AboutUsPage/AboutUs';
import Partners from './PartnersPage/Partners';

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
        <Dome />
        <WhyDonate t={t} />
        <HowDonate t={t} locale={locale} />
        <Donation t={t} />
        <AboutUs t={t} />
        <Partners t={t} />
      </div>
      <Footer t={t} />
    </>
  );
}
