import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import Section from '../../components/Section';

import BossVideo from './BossVideo';
import AboutUs from './AboutUs';

export default function AboutUsPage({ t }) {
  return (
    <>
      <Header fill />
      <Section>
        <BossVideo />
      </Section>
      <AboutUs t={t} />
      <Footer t={t} />
    </>
  );
}
