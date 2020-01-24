/* @jsx jsx */

import React from 'react';

import { useDispatch } from 'react-redux';

import { jsx } from '@emotion/core';

import { closeMenu } from '../appSlice';

import Link from './Link';

import { mq } from '../styles/utils';
import { listContainer, listItem } from '../styles/list';

const styles = {
  container: {
    zIndex: 10000,
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    visibility: 'hidden',
  },
  containerOpen: {
    visibility: 'visible',
  },
  background: {
    zIndex: 10000 + 1,
    position: 'absolute',
    top: 0,
    left: 0,
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  bgColumn: (index) => ({
    width: '25%',
    height: 0,
    background: '#181818',
    transition: 'ease-in',
    transitionDuration: ['.05s', '.2s', '.3s', '.35s'][index],
    transitionDelay: '.1s',
  }),
  bgColumnOpen: {
    height: '100%',
  },
  content: {
    zIndex: 10000 + 2,
    position: 'relative',
    top: 0,
    left: 0,
    width: '100%',
    paddingTop: '3em',
    color: '#FFF',
  },
  menuList: {
    ...listContainer,
    marginLeft: '5%',
    width: '60%',
    [mq(640)]: {
      width: 'auto',
    },
  },
  menuItem: {
    ...listItem,
    margin: '3em 0',
    opacity: 0,
    transform: 'translate3d(-20vw, 0, 0)',
    transition: '.2s ease-in',
  },
  menuItemOpen: {
    opacity: 1,
    transform: 'translate3d(0, 0, 0)',
    transition: '.5s ease-out',
  },
  menuLink: {
    fontSize: '12vw',
    color: '#FFF',
    textDecoration: 'none',
    [mq(640)]: {
      fontSize: '8vw',
    },
    '&:hover': {
      color: '#44d4c3',
    },
  },
};

function MenuItem({
  label, target, delay, open,
}) {
  const dispatch = useDispatch();

  return (
    <li
      css={[
        styles.menuItem,
        open ? styles.menuItemOpen : {},
        open ? { transitionDelay: delay } : {},
      ]}
    >
      <Link
        css={styles.menuLink}
        to={target}
        onClick={() => dispatch(closeMenu())}
      >
        {label}
      </Link>
    </li>
  );
}

export default function Menu({ open }) {
  return (
    <div
      id="menu"
      css={[
        styles.container,
        open ? styles.containerOpen : {},
      ]}
    >
      <div css={styles.background}>
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            css={[
              styles.bgColumn(i),
              open ? styles.bgColumnOpen : { transitionDelay: '.1s' },
            ]}
          />
        ))}
      </div>
      <div css={styles.content}>
        <ul css={styles.menuList}>
          <MenuItem
            label="Free Insurance"
            target="/free-insurance"
            delay=".3s"
            open={open}
          />
          <MenuItem
            label="Subscription Insurance"
            target="/subscription-insurance"
            delay=".4s"
            open={open}
          />
          <MenuItem
            label="About us"
            target="/about-us"
            delay=".5s"
            open={open}
          />
        </ul>
      </div>
    </div>
  );
}
