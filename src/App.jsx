import React from 'react';

import { useSelector } from 'react-redux';

import Header from './components/Header';
import OldMain from './components/Main';
import NewMain from './components/NewMain';
import Footer from './components/Footer';

export default function App() {
  const { t, locale, isNew } = useSelector((state) => ({
    t: state.t,
    locale: state.locale,
    isNew: state.isNew,
  }));

  const Main = isNew ? NewMain : OldMain;

  return (
    <>
      <Header locale={locale} />
      <Main t={t} />
      <Footer t={t} />
    </>
  );
}
