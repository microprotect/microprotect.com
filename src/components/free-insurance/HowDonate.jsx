import React from 'react';

import styled from '@emotion/styled';

import Section from '../Section';

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
};

const Content = styled.div({
  position: 'relative',
});

export default function HowDonate({ t, locale }) {
  return (
    <Section>
      <Title value={t.how_donate_title} />
      <Title
        style={styles.subtitle}
        level={3}
        value={t.how_donate_subtitle}
      />
      <Content>
        <HowDonateBox t={t} />
        <PriceExample t={t} locale={locale} />
      </Content>
    </Section>
  );
}
