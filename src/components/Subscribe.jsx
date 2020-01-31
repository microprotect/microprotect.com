/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import SubscribeForm from './SubscribeForm';
import Text from './Text';

import { mq } from '../styles/utils';

const styles = {
  container: {
    margin: 0,
    padding: '3em 0',
    background: '#44D4C2',
    color: '#FFF',
    fontSize: '2.5em',
    textAlign: 'center',
    [mq(1100)]: {
      fontSize: '1.7em',
    },
  },
  text: {
    margin: '0 auto 2em',
    width: '60%',
    [mq(1100)]: {
      width: '100%',
    },
  },
};

export default function Subscribe({ t }) {
  return (
    <div css={styles.container}>
      <div css={styles.text}>
        <Text value={t.subscribe1} />
      </div>
      <SubscribeForm t={t} />
      <div css={styles.text}>
        {t.subscribe2}
      </div>
    </div>
  );
}
