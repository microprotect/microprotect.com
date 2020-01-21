/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import { imageReplacement, mq } from '../styles/utils';
import clearAfter from '../styles/clearAfter';

import { LogoImage } from '../assets';

const styles = {
  container: {
    zIndex: 100,
    position: 'absolute',
    top: 0,
    left: '5%',
    margin: '1.5em auto 0',
    width: '90%',
  },
  logo: {
    float: 'left',
    display: 'block',
    width: '120px',
    height: '30px',
    marginLeft: '1vw',
    [mq(1100)]: {
      width: '250px',
      height: '46px',
      marginLeft: '.8vw',
    },
    ...imageReplacement(LogoImage),
  },
};

export default function Header() {
  return (
    <header css={[styles.container, clearAfter]}>
      <div id="logo" css={styles.logo}>microprotect</div>
    </header>
  );
}
