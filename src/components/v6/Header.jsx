import React from 'react';

import { Link } from 'gatsby';

import styled from '@emotion/styled';

import Container from './Container';

import { imageReplacement } from '../../styles/utils';

import { HEADER_HEIGHT } from '../../styles/constants-v6';

import { images } from '../../assets';

const LOGO_WIDTH = 2638;
const LOGO_HEIGHT = 485;

const Wrapper = styled.header({
  zIndex: 100,
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: HEADER_HEIGHT,
  lineHeight: HEADER_HEIGHT,
  background: '#000',
  color: '#FFF',
});

const HomeLink = styled(Link)({
  ...imageReplacement(images.logos.white),
  float: 'left',
  display: 'block',
  backgroundPosition: '0 50%',
  backgroundSize: 'contain',
  width: `calc(5em * .3 * ${LOGO_WIDTH / LOGO_HEIGHT})`,
  height: '100%',
  cursor: 'pointer',
});

const Languages = styled.ul({
  float: 'right',
  display: 'flex',
});

const Language = styled.li({
  margin: 0,
  padding: 0,
  alignItems: 'center',
  '& a': {
    padding: '0 0 0 1em',
    color: '#FFF',
  },
});

export default function Header() {
  return (
    <Wrapper>
      <Container>
        <HomeLink to="/" id="logo">
          Microprotect
        </HomeLink>
        <Languages>
          <Language>
            <Link to="/">KR</Link>
          </Language>
          <Language>
            <Link to="/">EN</Link>
          </Language>
        </Languages>
      </Container>
    </Wrapper>
  );
}
