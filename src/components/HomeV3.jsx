/* @jsx jsx */

import React from 'react';

import { useSelector } from 'react-redux';

import { jsx } from '@emotion/core';

import Header from './HeaderV3';
import Main from './MainV3';
import Footer from './FooterV2';
import Menu from './Menu';

export default function HomeV3({ t, locale }) {
  const menuOpen = useSelector((state) => state.menuOpen);

  return (
    <>
      <Header locale={locale} menuOpen={menuOpen} />
      <Menu open={menuOpen} />
      <Main t={t} />
      <Footer t={t} />
    </>
  );
}
