/* @jsx jsx */

import React from 'react';

import { jsx, css } from '@emotion/core';

import StrongText from '../StrongText';

import { HeaderImage } from '../../assets/v5';

const styles = {
  container: {
    position: 'relative',
    padding: '85vw 0 15vw',
    background: 'linear-gradient(135deg, #FFB4C8 0%, #FF7197 100%)',
    color: '#FFF',
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: `url(${HeaderImage}) 80% 20% no-repeat`,
    backgroundSize: '60vw',
  },
  slogan1: {
    position: 'relative',
    margin: '0 5%',
    fontFamily: 'BMJUA',
    fontSize: '8vw',
    '& b': {
      color: '#FFDEE7',
    },
  },
  slogan2: {
    position: 'relative',
    display: 'inline-block',
    margin: '.4em 5% 0',
    color: '#D03760',
    fontFamily: 'BMJUA',
    fontSize: '4.6vw',
    fontStyle: 'italic',
    '& b': {
      fontSize: '1.4em',
    },
  },
};

const underlined = css`
  &:after {
    display: block;
    margin-top: -.7em;
    height: .7em;
    background: #FFA1BB;
    content: "";
  }
`;

export default function HeaderPanel({ t }) {
  return (
    <div css={styles.container}>
      <div css={styles.image} />
      <h1 css={styles.slogan1}>
        <StrongText value={t.v5_slogan1} />
      </h1>
      <h2 css={[styles.slogan2, underlined]}>
        <StrongText value={t.v5_slogan2} />
      </h2>
    </div>
  );
}
