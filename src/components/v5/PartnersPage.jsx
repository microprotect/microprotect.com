/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import Header from './Header';
import HeaderPanel from './HeaderPanel';
import Partners from './Partners';
import Footer from './Footer';

export default function PartnersPage({ t }) {
  return (
    <>
      <Header />
      <HeaderPanel t={t} />
      <Partners t={t} />
      <Footer t={t} />
    </>
  );
}
