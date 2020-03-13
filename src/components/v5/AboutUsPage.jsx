/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import Header from './Header';
import HeaderPanel from './HeaderPanel';
import AboutUs from './AboutUs';
import Footer from './Footer';

export default function AboutUsPage({ t }) {
  return (
    <>
      <Header />
      <HeaderPanel />
      <AboutUs t={t} />
      <Footer t={t} />
    </>
  );
}
