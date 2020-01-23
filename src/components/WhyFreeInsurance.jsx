/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import Text from './Text';

import { mq } from '../styles/utils';

const BASE_MQ = mq(640);

const styles = {
  container: {
    clear: 'both',
    padding: '3em 5%',
    background: '#ECECEC',
  },
  title: {
    margin: '0 0 .5em',
    fontFamily: 'Helvetica',
    fontSize: '9vw',
    fontWeight: 'bold',
    lineHeight: '120%',
    textDecoration: 'none',
    [BASE_MQ]: {
      fontSize: '4vw',
    },
    [mq(1800)]: {
      fontSize: '4em',
    },
  },
  description: {
    fontSize: '1.5em',
    [BASE_MQ]: {
      fontSize: '1.3em',
    },
    [mq(1800)]: {
      fontSize: '2em',
    },
  },
};

export default function WhyFreeInsurance({ t }) {
  return (
    <div css={styles.container}>
      <h2 css={styles.title}>
        <Text value={t.free_insurance_why_title} />
      </h2>
      <div css={styles.description}>
        <Text value={t.free_insurance_why_description} />
      </div>
    </div>
  );
}
