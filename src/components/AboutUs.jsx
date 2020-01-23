/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import Text from './Text';
import BossVideo from './BossVideo';

import { mq } from '../styles/utils';

const BASE_MQ = mq(640);

const styles = {
  container: {
    padding: '8em 5%',
  },
  slogan: {
    fontFamily: 'Helvetica',
    fontSize: '4vw',
    fontWeight: 'normal',
    margin: '0 auto .3em',
    width: '90%',
    maxWidth: '1024px',
    lineHeight: '120%',
    textDecoration: 'none',
    [BASE_MQ]: {
      fontSize: '2.5vw',
    },
    [mq(1024)]: {
      width: '80%',
    },
    [mq(1800)]: {
      fontSize: '2.5em',
    },
  },
};

export default function AboutUs({ t }) {
  return (
    <main css={styles.container}>
      <div css={styles.slogan}>
        <Text value={t.about_us_slogan1} />
      </div>
      <div css={styles.slogan}>
        <Text value={t.about_us_slogan2} />
      </div>
      <div css={styles.slogan}>
        <Text value={t.about_us_slogan3} />
      </div>
      <BossVideo />
    </main>
  );
}
