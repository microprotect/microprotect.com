/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import { mq } from '../styles/utils';

import Slogan from './Slogan';
import Video from './Video';
import Describe from './Describe';
import Subscribe from './Subscribe';
import More from './More';
import Partners from './Partners';

const styles = {
  container: {
    fontWeight: 'lighter',
    fontSize: '2vw',
    [mq(1600)]: {
      fontSize: '30px',
    },
    '& section': {
      margin: '4em auto',
      width: '90%',
      maxWidth: '1400px',
    },
  },
};

export default function MainV1({ t }) {
  const handlePlay = () => window.postMessage({ type: 'play-video' }, '*');

  return (
    <main css={styles.container}>
      <Slogan />
      <section className="introduction">
        <Video
          videoId="GkmM2pbf2AE"
          onPlay={handlePlay}
        />
      </section>
      <Describe t={t} />
      <Subscribe t={t} />
      <More />
      <Partners />
    </main>
  );
}
