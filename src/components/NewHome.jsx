/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import Header from './Header';
import Main from './NewMain';
import Footer from './FooterV2';

const styles = {
  header: {
    zIndex: 1000,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
  },
};

export default function NewHome({ t, locale }) {
  return (
    <>
      <div css={styles.header}>
        <Header locale={locale} />
      </div>
      <Main t={t} />
      <Footer t={t} />
    </>
  );
}
