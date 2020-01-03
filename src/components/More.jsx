/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import { imageReplacement } from '../styles/utils';

import { VideoImage } from '../assets';

const LINK_URL = 'https://www.youtube.com/playlist'
  + '?list=PLYnkfDX2exRhsXZ3WrgrntFgmeJ1K8IvF';

const styles = {
  container: {
    marginTop: '7em',
    padding: '0 10%',
  },
  link: {
    display: 'block',
    height: 0,
    paddingBottom: `${(100 * 720) / 1280}%`,
    ...imageReplacement(VideoImage),
  },
};

export default function More() {
  return (
    <section css={styles.container}>
      <a
        css={styles.link}
        href={LINK_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        See more videos
      </a>
    </section>
  );
}
