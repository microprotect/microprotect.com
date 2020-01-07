import React from 'react';

import { useSelector } from 'react-redux';

import OldHome from './components/OldHome';
import NewHome from './components/NewHome';

export default function App() {
  const { t, locale, isNew } = useSelector((state) => ({
    t: state.t,
    locale: state.locale,
    isNew: state.isNew,
  }));

  const Home = isNew ? NewHome : OldHome;

  return (
    <Home t={t} locale={locale} />
  );
}
