import React from 'react';

import styled from '@emotion/styled';

import { BASE_MQ } from '../../styles/constants-v5';

import Video from '../../components/Video';

const Container = styled.section({
  margin: '3em auto 0',
  [BASE_MQ]: {
    width: '80%',
  },
});

export default function BossVideo() {
  const handlePlay = () => window.postMessage({ type: 'play-video' }, '*');

  return (
    <Container>
      <Video
        videoId="GkmM2pbf2AE"
        onPlay={handlePlay}
      />
    </Container>
  );
}
