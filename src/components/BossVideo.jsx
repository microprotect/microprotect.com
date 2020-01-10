/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import { mq } from '../styles/utils';

import Video from './Video';

const styles = {
  container: {
    margin: '5em auto 7em',
    [mq(1024)]: {
      width: '80%',
      maxWidth: '1024px',
    },
  },
};

export default function BossVideo() {
  const handlePlay = () => window.postMessage({ type: 'play-video' }, '*');

  return (
    <section css={styles.container}>
      <Video
        videoId="GkmM2pbf2AE"
        onPlay={handlePlay}
      />
    </section>
  );
}
