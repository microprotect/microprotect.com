import React from 'react';

import _ from 'lodash';

import styled from '@emotion/styled';

import Container from '../Container';

import {
  BASE_MQ,
  HEADER_HEIGHT,
} from '../../../styles/constants-v6';

import { images } from '../../../assets';

const Wrapper = styled.div({
  marginTop: `-${HEADER_HEIGHT}`,
  marginLeft: 'calc((100% - 100vw) / 2)',
  marginRight: 'calc((100% - 100vw) / 2)',
});

const Image = styled.div(({ source }) => ({
  height: '13em',
  background: `url(${source}) 50% 50% no-repeat`,
  backgroundSize: 'cover',
  [BASE_MQ]: {
    height: '30em',
  },
}));

const Title = styled.h1({
  fontSize: '8vw',
  fontWeight: 'bold',
  lineHeight: 1.1,
  padding: '1em 0',
  textTransform: 'capitalize',
  [BASE_MQ]: {
    fontSize: '3em',
  },
});

export default function HeaderPanel({ image, title }) {
  return (
    <Wrapper>
      <Image source={_.get(images, image)} />
      <Container>
        <Title>
          {title}
        </Title>
      </Container>
    </Wrapper>
  );
}
