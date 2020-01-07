/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import { mq } from '../styles/utils';

const styles = {
  title: {
    margin: '0 auto',
    width: '90%',
    marginTop: '.9em',
    marginBottom: '1.5em',
    paddingRight: '20%',
    lineHeight: '100%',
    fontSize: '5em',
    fontWeight: 'lighter',
    color: '#44d4c2',
    animation: '1.2s ease-out slideup',
    [mq(1600)]: {
      width: '1400px',
      marginTop: '.4em',
      marginBottom: '.9em',
      paddingRight: `${1400 * 0.2}px`,
    },
  },
};

export default function Slogan() {
  return (
    <h1 css={styles.title}>
      Secure more people equally
    </h1>
  );
}
