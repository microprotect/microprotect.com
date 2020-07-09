/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import { BASE_MQ } from '../../styles/constants-v5';

import Video from '../../components/Video';

const styles = {
  container: {
    margin: '3em auto',
    [BASE_MQ]: {
      width: '80%',
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
