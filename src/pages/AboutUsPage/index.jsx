/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import AboutUs from './AboutUs';

export default function AboutUsPage({ t }) {
  return (
    <>
      <Header fill />
      <AboutUs t={t} />
      <Footer t={t} />
    </>
  );
}
