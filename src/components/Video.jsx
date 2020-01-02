/* @jsx jsx */

import React, { useState } from 'react';

import { jsx } from '@emotion/core';

import YouTube from 'react-youtube';

const styles = {
  container: {
    position: 'relative',
    width: '100%',
    height: 0,
    paddingBottom: `${(100 * 315) / 560}%`,
    background: '#000',
    backgroundSize: 'cover',
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    animation: '1s ease-in fadein',
  },
};

export default function Video({ videoId, onPlay }) {
  const [isReady, setReady] = useState(false);
  const imageUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div
      css={[
        styles.container,
        { backgroundImage: `url(${imageUrl})` },
      ]}
    >
      <YouTube
        css={[
          styles.video,
          !isReady && { visibility: 'hidden' },
        ]}
        videoId={videoId}
        opts={{
          playerVars: {
            controls: 0,
            rel: 0,
          },
        }}
        onReady={setReady}
        onPlay={onPlay}
      />
    </div>
  );
}
