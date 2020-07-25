import React from 'react';

import styled from '@emotion/styled';

import {
  CONTENT_PADDING,
  BASE_MQ,
  backgroundColor,
} from '../../styles/constants-v4';

const Container = styled.div({
  position: 'relative',
  marginTop: '-15vw',
  width: '100%',
  overflow: 'hidden',
  [BASE_MQ]: {
    marginTop: '-200px',
  },
});

const Padding = styled.div({
  marginLeft: `-${50 / 2}%`,
  width: '150%',
  height: '45vw',
  padding: `7vw ${50 / 2}% 0`,
  boxShadow: '0 0 14px 0 rgba(200, 200, 200, 0.5)',
  backgroundColor,
  borderRadius: '100%',
});

const Content = styled.div({
  position: 'relative',
  marginTop: '-37vw',
  padding: '0 5% 10px',
  [BASE_MQ]: {
    marginTop: 'calc(-45vw + 5em)',
    padding: `0 ${CONTENT_PADDING} 10px`,
  },
});

export default function Dome() {
  return (
    <Container>
      <Padding />
      <Content />
    </Container>
  );
}
