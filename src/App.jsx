import React from 'react';

import { useSelector } from 'react-redux';

import HomeV1 from './components/HomeV1';
import HomeV2 from './components/HomeV2';
import RootV3 from './components/RootV3';

export default function App() {
  const { t, locale, version } = useSelector((state) => ({
    t: state.t,
    locale: state.locale,
    version: state.version,
  }));

  const Home = [HomeV1, HomeV2, RootV3][version - 1];

  return (
    <Home t={t} locale={locale} />
  );
}
