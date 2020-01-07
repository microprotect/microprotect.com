/* @jsx jsx */

import React, { useState } from 'react';

import { jsx } from '@emotion/core';

import { mq, imageReplacement } from '../styles/utils';

const layer = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
};

const styles = {
  container: {
    width: '100vw',
    height: '100vh',
    marginBottom: '2em',
  },
  content: {
    ...layer,
    zIndex: 2,
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    margin: '0 auto',
    width: '70%',
    maxWidth: '900px',
    lineHeight: '135%',
    letterSpacing: '.03em',
    fontFamily: 'Georgia',
    fontSize: '2em',
    fontWeight: 'normal',
    color: '#3ed7e8',
    textAlign: 'center',
    textTransform: 'capitalize',
    transform: 'scale(1, .9)',
    transition: '.3s',
    [mq(1024)]: {
      maxWidth: '100%',
      fontSize: '5em',
    },
  },
  highlighted: {
    color: '#FFF',
  },
  overlay: {
    ...layer,
    zIndex: 1,
    transition: '.3s',
  },
  image1: {
    height: '100%',
    ...imageReplacement('http://img.ezday.co.kr/cache/board/2009/05/18/74a50639fb91c61aec1d4479a179a724.gif'),
    backgroundSize: 'cover',
  },
};

export default function Vision() {
  const [isShowOverlay, setOverlayVisible] = useState(false);

  const handleMouseOver = () => setOverlayVisible(true);
  const handleMouseOut = () => setOverlayVisible(false);

  return (
    <section css={styles.container}>
      <div css={styles.content}>
        <h1 css={[
          styles.title,
          isShowOverlay ? styles.highlighted : {},
        ]}
        >
          <span
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onFocus={handleMouseOver}
            onBlur={handleMouseOver}
          >
            Secure
          </span>
          {' '}
          <span css={{ opacity: isShowOverlay ? 0.5 : 1 }}>
            more people equally
          </span>
        </h1>
      </div>
      <div css={[
        styles.overlay,
        { opacity: isShowOverlay ? 1 : 0 },
      ]}
      >
        <div css={styles.image1} />
      </div>
    </section>
  );
}
