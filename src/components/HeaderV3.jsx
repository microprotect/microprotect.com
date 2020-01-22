/* @jsx jsx */

import React from 'react';

import { useDispatch } from 'react-redux';

import { jsx } from '@emotion/core';
import { openMenu, closeMenu } from '../appSlice';


import { imageReplacement, mq } from '../styles/utils';
import clearAfter from '../styles/clearAfter';

import { WhiteLogoImage } from '../assets';

const styles = {
  container: {
    zIndex: 20000,
    position: 'fixed',
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
    ...imageReplacement(WhiteLogoImage),
  },
  menuButton: {
    float: 'right',
    border: 0,
    background: 'transparent',
    color: '#FFF',
  },
};

function OpenMenuButton() {
  const dispatch = useDispatch();

  return (
    <button
      css={styles.menuButton}
      type="button"
      onClick={() => dispatch(openMenu())}
    >
      Menu
    </button>
  );
}

function CloseMenuButton() {
  const dispatch = useDispatch();

  return (
    <button
      css={styles.menuButton}
      type="button"
      onClick={() => dispatch(closeMenu())}
    >
      Close
    </button>
  );
}

export default function Header({ menuOpen }) {
  return (
    <header css={[styles.container, clearAfter]}>
      <div id="logo" css={styles.logo}>microprotect</div>
      {menuOpen ? <CloseMenuButton /> : <OpenMenuButton />}
    </header>
  );
}
