/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import { mq } from '../styles/utils';

import { MainVideo } from '../assets';

const styles = {
  container: {
    position: 'relative',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
    background: '#000',
  },
  slogan: {
    zIndex: 2,
    position: 'absolute',
    top: '5%',
    left: '5%',
    width: '40%',
    lineHeight: '105%',
    fontFamily: 'Helvetica',
    fontSize: '20vw',
    fontWeight: '900',
    textTransform: 'capitalize',
    color: '#000',
    [mq(640)]: {
      top: '1%',
      lineHeight: '100%',
      fontSize: '10vw',
    },
    [mq(1800)]: {
      maxWidth: '800px',
      lineHeight: '110%',
      fontSize: '10em',
    },
  },
  video: {
    zIndex: 1,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate3d(-50%, -50%, 0)',
    width: '100%',
    height: 'auto',
    '@media (max-aspect-ratio: 1800/1068)': {
      width: 'auto',
      height: '100%',
    },
  },
};

export default function Eyecatch() {
  return (
    <div css={styles.container}>
      <h1
        css={styles.slogan}
      >
        Secure more people equally
      </h1>
      <div>
        <video
          css={styles.video}
          autoPlay
          playsInline
          loop
          muted
        >
          <source src={MainVideo} />
        </video>
      </div>
    </div>
  );
}
