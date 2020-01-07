import React from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

export default function OldHome({ t, locale }) {
  return (
    <>
      <Header locale={locale} />
      <Main t={t} />
      <Footer t={t} />
    </>
  );
}
