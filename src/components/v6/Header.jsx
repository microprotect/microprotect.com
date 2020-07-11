import React, { useEffect, useState } from 'react';

import { Link } from 'gatsby';

import styled from '@emotion/styled';

import { imageReplacement } from '../../styles/utils';

import {
  BASE_MQ,
  HEADER_HEIGHT,
  MOBILE_PADDING_HORIZONTAL,
  DESKTOP_PADDING_HORIZONTAL,
} from '../../styles/constants-v6';

import { images } from '../../assets';

const LOGO_WIDTH = 2638;
const LOGO_HEIGHT = 485;

const Wrapper = styled.header(({ filled }) => ({
  zIndex: 100,
  position: 'fixed',
  top: 0,
  left: 0,
  padding: `0 ${MOBILE_PADDING_HORIZONTAL}`,
  width: '100%',
  height: HEADER_HEIGHT,
  lineHeight: HEADER_HEIGHT,
  color: '#FFF',
  background: filled ? 'rgba(0, 0, 0, .8)' : 'transparent',
  [BASE_MQ]: {
    padding: `0 ${DESKTOP_PADDING_HORIZONTAL}`,
  },
}));

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
  display: 'none',
  [BASE_MQ]: {
    display: 'flex',
  },
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
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setFilled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Wrapper filled={filled}>
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
    </Wrapper>
  );
}
