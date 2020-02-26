/* @jsx jsx */

import React, { useState, useEffect } from 'react';

import { jsx } from '@emotion/core';

import Link from '../Link';

import { imageReplacement } from '../../styles/utils';
import clearAfter from '../../styles/clearAfter';
import {
  CONTENT_PADDING,
  BASE_MQ,
} from '../../styles/constants-v4';

import { LogoImage } from '../../assets/v5';

const styles = {
  container: {
    zIndex: 100,
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    padding: '1em 5%',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    boxShadow: '0 0 6px 0 rgba(200, 200, 200, 0)',
    transition: '.3s ease-out',
    [BASE_MQ]: {
      padding: `1em ${CONTENT_PADDING}`,
    },
  },
  filled: {
    backgroundColor: '#7AC7F8',
    boxShadow: '0 0 6px 0 rgba(200, 200, 200, .5)',
  },
  logo: {
    float: 'left',
    display: 'block',
    width: '200px',
    height: '50px',
    cursor: 'pointer',
    [BASE_MQ]: {
      width: '250px',
      height: '46px',
    },
    ...imageReplacement(LogoImage),
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
        to="/?version=5"
        id="logo"
        css={styles.logo}
      >
        Microprotect
      </Link>
    </header>
  );
}
