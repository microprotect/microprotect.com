import React from 'react';

import Header from './Header';
import Main from './MainV1';
import Footer from './FooterV1';

export default function HomeV1({ t, locale }) {
  return (
    <>
      <Header locale={locale} />
      <Main t={t} />
      <Footer t={t} />
    </>
  );
}
