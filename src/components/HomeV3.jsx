/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import Header from './HeaderV3';
import Main from './MainV3';
import Footer from './FooterV2';

export default function HomeV3({ t, locale }) {
  return (
    <>
      <Header locale={locale} />
      <Main t={t} />
      <Footer t={t} />
    </>
  );
}
