/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import Header from './Header';
import HeaderPanel from './HeaderPanel';

export default function Home({ t }) {
  return (
    <>
      <Header />
      <HeaderPanel t={t} />
    </>
  );
}
