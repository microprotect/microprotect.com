import React from 'react';

import styled from '@emotion/styled';

import Container from '../Container';

import {
  BASE_MQ,
} from '../../../styles/constants-v6';

const Wrapper = styled.div({
  margin: '0 calc((100% - 100vw) / 2)',
  padding: '3em 0',
  [BASE_MQ]: {
    padding: '5em 0',
  },
  '&:first-of-type': {
    paddingTop: 0,
  },
  '&:nth-of-type(2n)': {
    background: '#F5F5F5',
    color: '#22232B',
  },
  '& h2': {
    fontSize: '5vw',
    margin: '2em 0 1em',
    '&:first-of-type': {
      marginTop: 0,
    },
    [BASE_MQ]: {
      fontSize: '1.4em',
    },
  },
  '& blockquote': {
    marginBottom: '5em',
  },
  '& p': {
    marginBottom: '.85em',
  },
  '& ol': {
    margin: '2em 0',
    paddingLeft: '1.2em',
  },
  '& ul': {
    margin: '2em 0',
  },
  '& li': {
    margin: '.85em 0',
  },
  '& strong': {
    fontSize: '1.2em',
    fontWeight: 'bold',
  },
});

const Column = styled(Container)({
  [BASE_MQ]: {
    paddingRight: '30%',
  },
});

export default function Content({ children }) {
  return (
    <Wrapper>
      <Column>
        {children}
      </Column>
    </Wrapper>
  );
}
