/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

const styles = {
  container: {
    position: 'relative',
    display: 'inline-block',
    margin: '0 .1em .1em',
    fontWeight: 'bold',
  },
  box: {
    zIndex: 1,
    position: 'absolute',
    top: '.1em',
    bottom: 0,
    left: '-.1em',
    right: '-.1em',
    background: '#46ebd9',
  },
  text: {
    zIndex: 2,
    position: 'relative',
  },
};

export default function BoxedText({ value }) {
  return (
    <span css={styles.container}>
      <span css={styles.box} />
      <span css={styles.text}>
        {value}
      </span>
    </span>
  );
}
