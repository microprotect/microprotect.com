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
    height: '35em',
  },
}));

const Title = styled.h1({
  fontSize: '1em',
  fontWeight: 'normal',
  maxWidth: '50em',
  lineHeight: 1.1,
  padding: '3em 0',
  '& span': {
    display: 'block',
    fontSize: '2em',
  },
  '& small': {
    display: 'block',
    fontSize: '1em',
    fontWeight: 'bold',
    marginTop: '1.5em',
  },
  [BASE_MQ]: {
    '& span': {
      fontSize: '4em',
    },
    '& small': {
      fontSize: '1.2em',
    },
  },
});

export default function HeaderPanel({ title, partner, image }) {
  return (
    <Wrapper>
      <Image source={_.get(images, image)} />
      <Container>
        <Title>
          {title.split('\n').map((line) => (
            <span key={line}>
              {line}
            </span>
          ))}
          <small>{partner}</small>
        </Title>
      </Container>
    </Wrapper>
  );
}
