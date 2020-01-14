import React from 'react';

import Header from './Header';
import Main from './OldMain';
import Footer from './FooterV1';

export default function OldHome({ t, locale }) {
  return (
    <>
      <Header locale={locale} />
      <Main t={t} />
      <Footer t={t} />
    </>
  );
}
