/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import Title from './Title';
import StrongText from '../StrongText';
import Text from '../Text';

import {
  BASE_MQ,
  CONTENT_PADDING,
  backgroundColor,
  white,
} from '../../styles/constants-v4';

import { ComingSoonImage } from '../../assets/v4';

const styles = {
  container: {
    padding: '10vw 5% 0',
    backgroundColor,
    [BASE_MQ]: {
      padding: `5em ${CONTENT_PADDING} 0`,
    },
  },
  title: {
    [BASE_MQ]: {
      '& br': {
        display: 'none',
      },
      '& span:first-of-type': {
        marginRight: '.3em',
      },
    },
  },
  link: {
    display: 'block',
    fontFamily: 'S-CoreDream-8',
    fontSize: '4.5vw',
    textAlign: 'center',
    textDecoration: 'none',
    [BASE_MQ]: {
      fontSize: '1.6em',
    },
  },
  comingSoon: {
    margin: '5vw 0',
    padding: '4vw',
    lineHeight: '115%',
    background: `url(${ComingSoonImage}) 50% 0 no-repeat`,
    backgroundSize: 'contain',
    color: white,
    fontFamily: 'S-CoreDream',
    fontSize: '5vw',
    textAlign: 'center',
    [BASE_MQ]: {
      margin: '1em auto',
      padding: '.7em',
      maxWidth: '700px',
      fontSize: '1.3em',
    },
    '& b': {
      fontFamily: 'S-CoreDream-8',
    },
  },
  description: {
    marginTop: '8vw',
    fontFamily: 'S-CoreDream',
    fontSize: '4vw',
    [BASE_MQ]: {
      marginTop: '1.5em',
      fontSize: '1.6em',
      textAlign: 'center',
    },
  },
};

function ComingSoon({ t }) {
  return (
    <div css={styles.comingSoon}>
      <StrongText value={t.subscription_insurance_coming_soon} />
    </div>
  );
}

export default function SubscriptionInsurance({ t }) {
  return (
    <div css={styles.container}>
      <Title
        css={styles.title}
        value={t.subscription_insurance_title}
      />
      <a
        css={styles.link}
        href="https://www.youtube.com/watch?v=qG--TQhGi00"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ComingSoon t={t} />
        {t.watch_the_video}
      </a>
      <div css={styles.description}>
        <Text value={t.subscription_insurance_description} />
      </div>
    </div>
  );
}
