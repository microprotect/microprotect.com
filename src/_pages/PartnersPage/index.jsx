/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import Partners from './Partners';

export default function PartnersPage({ t }) {
  return (
    <>
      <Header fill />
      <Partners t={t} />
      <Footer t={t} />
    </>
  );
}
