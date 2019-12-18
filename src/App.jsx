import React from 'react';

import { useSelector } from 'react-redux';

import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const { t, locale } = useSelector((state) => ({
    t: state.t,
    locale: state.locale,
  }));

  return (
    <>
      <Header locale={locale} />
      <Main t={t} />
      <Footer t={t} />
    </>
  );
}
