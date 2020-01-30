/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import Text from '../Text';
import DonationBox from './DonationBox';

import {
  BASE_MQ,
  CONTENT_PADDING,
  backgroundColor,
} from '../../styles/constants-v4';

const styles = {
  container: {
    position: 'relative',
    marginTop: '-15vw',
    paddingBottom: '10px',
    width: '100%',
    overflow: 'hidden',
    [BASE_MQ]: {
      marginTop: '-200px',
    },
  },
  padding: {
    marginLeft: `-${50 / 2}%`,
    width: '150%',
    height: '50vw',
    padding: `7vw ${50 / 2}%`,
    boxShadow: '0 0 14px 0 rgba(200, 200, 200, 0.5)',
    background: backgroundColor,
    borderRadius: '100%',
  },
  content: {
    marginTop: '-47vw',
    padding: '0 5%',
    background: backgroundColor,
    [BASE_MQ]: {
      padding: `0 ${CONTENT_PADDING}`,
    },
  },
  title: {
    fontFamily: 'BMJUA',
    fontSize: '7vw',
    textTransform: 'uppercase',
    textAlign: 'center',
    [BASE_MQ]: {
      fontSize: '3em',
    },
  },
};

export default function Donation({ t }) {
  return (
    <div css={styles.container}>
      <div css={styles.padding} />
      <div css={styles.content}>
        <h2 css={styles.title}>
          <Text value={t.donation_title} />
        </h2>
        <DonationBox t={t} />
      </div>
    </div>
  );
}
