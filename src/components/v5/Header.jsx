/* @jsx jsx */

import React, { useState, useEffect } from 'react';

import { jsx } from '@emotion/core';

import Link from '../Link';

import { imageReplacement } from '../../styles/utils';
import clearAfter from '../../styles/clearAfter';
import {
  CONTENT_PADDING,
  BASE_MQ,
} from '../../styles/constants-v5';

import { LogoImage } from '../../assets/v5';

const styles = {
  container: {
    zIndex: 100,
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    padding: '0 5%',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    boxShadow: '0 0 6px 0 rgba(200, 200, 200, 0)',
    transition: '.3s ease-out',
    [BASE_MQ]: {
      padding: `.1em ${CONTENT_PADDING}`,
    },
  },
  logo: {
    float: 'left',
    display: 'block',
    ...imageReplacement(LogoImage),
    backgroundPosition: '0 50%',
    backgroundSize: `${30 * (800 / 145)}px`,
    width: `${30 * (800 / 145)}px`,
    height: '60px',
    cursor: 'pointer',
  },
  filled: {
    backgroundColor: '#7AC7F8',
    boxShadow: '0 0 6px 0 rgba(200, 200, 200, .5)',
  },
};

export default function Header() {
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setFilled(window.scrollY > 20);
    });
  });

  return (
    <header
      css={[
        styles.container,
        clearAfter,
        filled ? styles.filled : {},
      ]}
    >
      <Link
        css={styles.logo}
        to="/"
        id="logo"
      >
        Microprotect
      </Link>
    </header>
  );
}
