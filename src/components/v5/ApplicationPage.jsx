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
        가입정보
        |
        방문국가 정보
        |
        결제
      </Section>
      <Section>
        <ApplicationForm t={t} product={product} />
      </Section>
      <Footer t={t} />
    </>
  );
}
