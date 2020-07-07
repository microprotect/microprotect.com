import React from 'react';

import { useSelector } from 'react-redux';

import Root from './_pages/Root';

export default function App() {
  const { t, locale } = useSelector((state) => ({
    t: state.t,
    locale: state.locale,
    version: state.version,
  }));

  return (
    <Root t={t} locale={locale} />
  );
}
