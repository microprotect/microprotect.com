/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import Text from './Text';

import { mq } from '../styles/utils';

const BASE_MQ = mq(640);

const styles = {
  container: {
    paddingTop: '5em',
  },
  title: {
    marginLeft: '5%',
    fontFamily: 'Helvetica',
    fontSize: '9vw',
    fontWeight: 'bold',
    lineHeight: '120%',
    textDecoration: 'none',
    [BASE_MQ]: {
      fontSize: '5vw',
    },
    [mq(1800)]: {
      fontSize: '5em',
    },
  },
  slide: {
    display: 'block',
    margin: '1em auto',
    width: '100%',
    maxWidth: '1024px',
  },
};

function format(number, size) {
  const s = String(number);
  return '0'.repeat(size - s.length) + s;
}

export default function SubscriptionInsurance() {
  return (
    <main css={styles.container}>
      <h1 css={styles.title}>
        <Text value={'Microprotect\nprepare for\ncritical illness'} />
      </h1>
      {[...Array(16)].map((_, i) => i + 1)
        .map((i) => (
          <div key={i}>
            <img
              css={styles.slide}
              src={`/assets/images/subscription/${format(i, 2)}.jpg`}
              alt=""
            />
          </div>
        ))}
    </main>
  );
}
