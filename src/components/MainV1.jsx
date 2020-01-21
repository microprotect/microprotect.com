/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import { mq } from '../styles/utils';

import Slogan from './Slogan';
import Subscribe from './Subscribe';
import Partners from './Partners';
import Describe from './Describe';
import Video from './Video';
import More from './More';

const styles = {
  container: {
    fontWeight: 'lighter',
    fontSize: '2vw',
    [mq(1600)]: {
      fontSize: '30px',
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
