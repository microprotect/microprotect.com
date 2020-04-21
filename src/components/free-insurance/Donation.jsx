import React from 'react';

import Section from '../Section';

import Title from './Title';
import DonationBox from './DonationBox';

export default function Donation({ t }) {
  return (
    <Section>
      <Title value={t.donation_title} />
      <DonationBox t={t} />
    </Section>
  );
}
