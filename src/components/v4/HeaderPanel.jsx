/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import { mq } from '../../styles/utils';

import {
  HeaderBackgroundImage,
  HeaderImage1,
} from '../../assets/v4';

const BASE_MQ = mq(640);

const styles = {
  container: {
    position: 'relative',
    minHeight: '110vw',
    background: `url(${HeaderBackgroundImage}) 50% 100% no-repeat`,
    backgroundSize: '190vw',
    [BASE_MQ]: {
      margin: '0 auto',
      maxWidth: '2400px',
      minHeight: '1100px',
      backgroundSize: '2400px',
    },
  },
  sprite: {
    position: 'absolute',
    bottom: '11vw',
    right: 0,
    width: '60vw',
    height: '60vw',
    background: `url(${HeaderImage1}) 0 100% no-repeat`,
    backgroundSize: 'contain',
    [BASE_MQ]: {
      bottom: '120px',
      right: '50%',
      marginRight: '-700px',
      width: '800px',
      height: '800px',
    },
  },
  content: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    padding: '5vw',
  },
  slogan: {
    margin: 0,
    fontFamily: 'BMJUA',
    fontSize: '8vw',
    fontWeight: '300',
    letterSpacing: '.1vw',
    textTransform: 'capitalize',
    [BASE_MQ]: {
      marginTop: '1.2em',
      fontSize: '6em',
    },
  },
  description: {
    marginTop: '5vw',
    width: '90%',
    lineHeight: '140%',
    fontFamily: 'S-CoreDream-3Light',
    fontSize: '3.6vw',
    fontWeight: '1000',
    [BASE_MQ]: {
      fontSize: '1.5em',
    },
  },
};

export default function HeaderPanel({ t }) {
  return (
    <header css={styles.container}>
      <div css={styles.sprite} />
      <div css={styles.content}>
        <h1 css={styles.slogan}>
          <div>Secure</div>
          {' '}
          <div>more people</div>
          {' '}
          <div>equally</div>
        </h1>
        <div css={styles.description}>
          {t.who_we_are}
        </div>
      </div>
    </header>
  );
}
