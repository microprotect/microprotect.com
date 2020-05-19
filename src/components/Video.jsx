import React, { useState } from 'react';

import styled from '@emotion/styled';

import ReactYouTube from 'react-youtube';

const Container = styled.div(({ imageUrl }) => ({
  position: 'relative',
  width: '100%',
  height: 0,
  paddingBottom: `${(100 * 315) / 560}%`,
  background: `#000 url(${imageUrl})`,
  backgroundSize: 'cover',
}));

const YouTube = styled(ReactYouTube)(({ ready }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  animation: '1s ease-in fadein',
  visibility: ready ? 'visible' : 'hidden',
}));

export default function Video({ videoId, onPlay }) {
  const [isReady, setReady] = useState(false);
  const imageUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <Container imageUrl={imageUrl}>
      <YouTube
        videoId={videoId}
        opts={{
          playerVars: {
            controls: 0,
            rel: 0,
          },
        }}
        onReady={setReady}
        onPlay={onPlay}
        ready={isReady}
      />
    </Container>
  );
}
