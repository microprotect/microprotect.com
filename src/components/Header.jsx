import React, { useState, useEffect } from 'react';

import styled from '@emotion/styled';

import { imageReplacement } from '../styles/utils';
import clearAfter from '../styles/clearAfter';
import {
  CONTENT_PADDING,
  BASE_MQ,
} from '../styles/constants-v5';

import { LogoImage } from '../assets/v5';

const Container = styled.header(({ filled }) => [
  {
    zIndex: 100,
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '60px',
    linHeight: '60px',
    padding: '0 5%',
    backgroundColor: filled ? '#7AC7F8' : 'rgba(255, 255, 255, 0)',
    boxShadow: `0 0 6px 0 rgba(200, 200, 200, ${filled ? 0.5 : 0})`,
    transition: '.3s ease-out',
    [BASE_MQ]: {
      height: '3em',
      padding: `0 ${CONTENT_PADDING}`,
    },
  },
  clearAfter,
]);

const LogoLink = styled.a({
  ...imageReplacement(LogoImage),
  backgroundPosition: '0 50%',
  backgroundSize: `${30 * (800 / 145)}px`,
  float: 'left',
  display: 'block',
  width: `${30 * (800 / 145)}px`,
  height: '100%',
  cursor: 'pointer',
});

export default function Header({ fill = false }) {
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setFilled(window.scrollY > 20);
    });
  });

  return (
    <Container filled={fill || filled}>
      <LogoLink id="logo" href="/">
        Microprotect
      </LogoLink>
    </Container>
  );
}
