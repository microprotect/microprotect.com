import React from 'react';

import { Link, FormattedMessage } from 'gatsby-plugin-intl';

import styled from '@emotion/styled';

import Container from '../Container';

import {
  BASE_MQ,
  HEADER_HEIGHT,
  MOBILE_PADDING_HORIZONTAL,
} from '../../../styles/constants-v6';

import { images } from '../../../assets';

const Wrapper = styled.div({
  display: 'flex',
  padding: `${HEADER_HEIGHT} ${MOBILE_PADDING_HORIZONTAL} 0`,
  height: '100vh',
  minHeight: '35em',
  background: `url(${images.home.background}) 50% 50% no-repeat`,
  backgroundSize: 'cover',
  alignItems: 'center',
  [BASE_MQ]: {
    padding: 0,
  },
});

const Slogan = styled.h1({
  fontSize: '1em',
  fontWeight: 'normal',
  position: 'relative',
  maxWidth: '12.5em',
  color: '#FFF',
  textTransform: 'lowercase',
  '& strong': {
    display: 'block',
    fontSize: '3em',
    fontWeight: 700,
    lineHeight: 1,
  },
  '& small': {
    display: 'block',
    fontSize: '1.2em',
    fontWeight: 500,
    marginTop: '.6em',
    lineHeight: 1.2,
    textTransform: 'none',
  },
  [BASE_MQ]: {
    maxWidth: '30em',
    '& strong': {
      fontSize: '6em',
    },
    '& small': {
      fontSize: '1.35em',
    },
  },
});

const List = styled.ul({
  position: 'relative',
  marginTop: '1.5em',
  borderTop: '1px solid #636564',
  [BASE_MQ]: {
    width: '10em',
  },
});

const Item = styled.li({
  '& a': {
    display: 'block',
    padding: '.8em 0',
    borderBottom: '1px solid #636564',
    color: '#2ED0F6',
    textTransform: 'capitalize',
  },
});

export default function HeaderPanel() {
  return (
    <Wrapper>
      <Container>
        <Slogan>
          <strong>
            <FormattedMessage id="home.slogan1" />
          </strong>
          <small>
            <FormattedMessage id="home.slogan2" />
          </small>
        </Slogan>
        <List>
          <Item>
            <Link to="/about/purpose">
              <FormattedMessage id="home.links.purpose" />
            </Link>
          </Item>
          <Item>
            <Link to="/about/approach">
              <FormattedMessage id="home.links.approach" />
            </Link>
          </Item>
        </List>
      </Container>
    </Wrapper>
  );
}
