/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import {
  CONTENT_PADDING,
  BASE_MQ,
  backgroundColor,
} from '../../styles/constants-v4';

import {
  HeaderBackgroundImage,
  HeaderImage1,
} from '../../assets/v4';

const width = 2400;
const height = 2400 * (1161 / 2560);

const styles = {
  container: {
    padding: '0 5%',
    background: `url(${HeaderBackgroundImage}) 50% 100% no-repeat`,
    backgroundSize: '190vw',
    backgroundColor,
    overflow: 'hidden',
    [BASE_MQ]: {
      padding: `0 ${CONTENT_PADDING}`,
      backgroundSize: `${width}px`,
    },
  },
  content: {
    position: 'relative',
    height: '125vw',
    [BASE_MQ]: {
      margin: '0 auto',
      maxWidth: `${width}px`,
      height: `${height}px`,
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
  slogan: {
    position: 'relative',
    margin: 0,
    marginTop: '2.5em',
    fontFamily: 'BMJUA',
    fontSize: '8vw',
    fontWeight: '300',
    letterSpacing: '.1vw',
    textTransform: 'capitalize',
    [BASE_MQ]: {
      marginTop: '1.4em',
      fontSize: '6em',
    },
  },
  description: {
    position: 'relative',
    marginTop: '5vw',
    width: '90%',
    lineHeight: '140%',
    fontFamily: 'S-CoreDream',
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
      <div css={styles.content}>
        <div css={styles.sprite} />
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
