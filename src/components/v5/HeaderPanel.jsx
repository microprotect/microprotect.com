/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import StrongText from '../StrongText';

import { BASE_MQ } from '../../styles/constants-v4';

import { HeaderImage } from '../../assets/v5';

const styles = {
  container: {
    position: 'relative',
    padding: '25vw 0 40vw',
    background: 'linear-gradient(135deg, #7AC7F8 0%, #6594F8 100%)',
    color: '#FFF',
    [BASE_MQ]: {
      padding: '10em 0 12em',
    },
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '70%',
    background: `url(${HeaderImage}) 50% 0 no-repeat`,
    backgroundSize: 'cover',
  },
  slogan1: {
    position: 'relative',
    margin: 0,
    lineHeight: '120%',
    fontFamily: 'BMJUA',
    fontSize: '9vw',
    fontWeight: 'normal',
    textAlign: 'center',
    '& b': {
      fontWeight: 'normal',
      color: '#CDE8FF',
    },
    [BASE_MQ]: {
      margin: '0 auto',
      maxWidth: '1100px',
      fontSize: '3em',
      textAlign: 'left',
    },
  },
  slogan2: {
    position: 'relative',
    margin: '.6em auto',
    color: '#20336A',
    fontFamily: 'BMJUA',
    fontSize: '7.2vw',
    fontWeight: 'normal',
    fontStyle: 'italic',
    textAlign: 'center',
    [BASE_MQ]: {
      maxWidth: '1100px',
      fontSize: '2.5em',
      textAlign: 'left',
    },
  },
};

export default function HeaderPanel({ t }) {
  return (
    <div css={styles.container}>
      <div css={styles.background} />
      <h1 css={styles.slogan1}>
        <StrongText value={t.v5_slogan1} />
      </h1>
      <h2 css={styles.slogan2}>
        {t.v5_slogan2}
      </h2>
    </div>
  );
}
