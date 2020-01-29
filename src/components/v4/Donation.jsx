/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import { mq } from '../../styles/utils';
import { backgroundColor } from '../../styles/constants-v4';

const BASE_MQ = mq(640);

const styles = {
  container: {
    position: 'relative',
    marginTop: '-15vw',
    width: '100%',
    overflow: 'hidden',
    [BASE_MQ]: {
      marginTop: '-200px',
    },
  },
  content: {
    marginLeft: `-${50 / 2}%`,
    width: '150%',
    padding: `7vw ${50 / 2 + 5}%`,
    minHeight: '20vw',
    background: backgroundColor,
    borderRadius: '100%',
  },
};

export default function Donation() {
  return (
    <div css={styles.container}>
      <div css={styles.content}>
        Hello, world!
      </div>
    </div>
  );
}
