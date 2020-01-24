/* @jsx jsx */

import React from 'react';

import { withRouter } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { jsx } from '@emotion/core';
import { openMenu, closeMenu } from '../appSlice';

import Link from './Link';

import { imageReplacement, mq } from '../styles/utils';
import clearAfter from '../styles/clearAfter';

import { WhiteLogoImage } from '../assets';

const styles = {
  container: {
    zIndex: 20000,
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    padding: '20px 0',
  },
  filled: {
    background: '#181818',
  },
  logo: {
    display: 'block',
    marginLeft: '5%',
    width: '120px',
    height: '30px',
    [mq(1100)]: {
      width: '250px',
      height: '46px',
    },
    ...imageReplacement(WhiteLogoImage),
  },
  menuButton: {
    position: 'absolute',
    top: '20px',
    right: '5%',
    border: 0,
    background: 'transparent',
    color: '#FFF',
    height: 0,
    opacity: 0,
    visibility: 'hidden',
  },
  active: {
    height: 'auto',
    opacity: 1,
    visibility: 'visible',
    transition: '.3s',
  },
};

function Logo() {
  const dispatch = useDispatch();

  return (
    <Link
      to="/"
      id="logo"
      css={styles.logo}
      onClick={() => dispatch(closeMenu())}
    >
      Microprotect
    </Link>
  );
}

function OpenMenuButton({ active }) {
  const dispatch = useDispatch();

  return (
    <button
      css={[
        styles.menuButton,
        active ? styles.active : {},
      ]}
      type="button"
      onClick={() => dispatch(openMenu())}
    >
      Menu
    </button>
  );
}

function CloseMenuButton({ active }) {
  const dispatch = useDispatch();

  return (
    <button
      css={[
        styles.menuButton,
        active ? styles.active : {},
      ]}
      type="button"
      onClick={() => dispatch(closeMenu())}
    >
      Close
    </button>
  );
}

function Header({ menuOpen, location }) {
  return (
    <header css={[
      styles.container,
      clearAfter,
      location.pathname !== '/' ? styles.filled : {},
    ]}
    >
      <Logo />
      <OpenMenuButton active={!menuOpen} />
      <CloseMenuButton active={menuOpen} />
    </header>
  );
}

export default withRouter(Header);
