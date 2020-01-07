/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import { mq } from '../styles/utils';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    width: '100vw',
    height: '90vh',
  },
  title: {
    margin: '0 auto',
    width: '80%',
    maxWidth: '1100px',
    lineHeight: '135%',
    letterSpacing: '.03em',
    fontFamily: 'Georgia',
    fontSize: '5em',
    fontWeight: 'normal',
    color: '#3ed7e8',
    textAlign: 'center',
    textTransform: 'capitalize',
    transform: 'scale(1, .9)',
    [mq(2500)]: {
      maxWidth: '100%',
    },
  },
};

export default function Vision() {
  return (
    <section css={styles.container}>
      <h1 css={styles.title}>
        Secure more people equally
      </h1>
    </section>
  );
}
