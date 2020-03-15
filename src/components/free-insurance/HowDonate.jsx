/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import Section from './Section';
import Title from './Title';
import HowDonateBox from './HowDonateBox';
import PriceExample from './PriceExample';

import { BASE_MQ } from '../../styles/constants-v4';

const styles = {
  subtitle: {
    marginTop: '3vw',
    fontFamily: 'S-CoreDream',
    fontSize: '5vw',
    [BASE_MQ]: {
      fontSize: '1.6em',
      textAlign: 'center',
    },
  },
  content: {
    position: 'relative',
  },
};

export default function HowDonate({ t, locale }) {
  return (
    <Section>
      <Title value={t.how_donate_title} />
      <Title
        style={styles.subtitle}
        level={3}
        value={t.how_donate_subtitle}
      />
      <div css={styles.content}>
        <HowDonateBox t={t} />
        <PriceExample t={t} locale={locale} />
      </div>
    </Section>
  );
}
