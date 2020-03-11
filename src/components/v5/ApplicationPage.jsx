/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import Header from './Header';
import ApplicationHeaderPanel from './ApplicationHeaderPanel';
import ApplicationForm from './ApplicationForm';
import Footer from './Footer';
import Section from './Section';

export default function ApplicationPage({ t, product }) {
  return (
    <>
      <Header />
      <ApplicationHeaderPanel t={t} product={product} />
      <Section>
        <ApplicationForm t={t} product={product} />
      </Section>
      <Footer t={t} />
    </>
  );
}
