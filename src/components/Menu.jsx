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
    transition: '1s',
  },
  containerOpen: {
    visibility: 'visible',
  },
  background: {
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  bgColumn: {
    width: '25%',
    height: 0,
    background: '#181818',
    transition: 'ease-in',
  },
  bgColumns: [
    { transition: '.3s' },
    { transition: '.5s' },
    { transition: '.6s' },
    { transition: '.7s' },
  ],
  bgColumnOpen: {
    height: '100%',
  },
  content: {
    position: 'absolute',
    top: '3em',
    left: 0,
    width: '100%',
    minHeight: '100vh',
    color: '#FFF',
    opacity: 1,
    transform: 'translate3d(0, 0, 0)',
    transition: '.1s ease-out',
    '& a': {
      color: '#FFF',
      fontSize: '12vw',
      textDecoration: 'none',
      transition: '.3s',
      [mq(640)]: {
        fontSize: '8vw',
      },
      '&:hover': {
        color: '#44d4c3',
      },
    },
  },
  contentHidden: {
    opacity: 0,
    transform: 'translate3d(-10vw, 0, 0)',
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
    transform: 'translate3d(-10vw, 0, 0)',
  },
  openMenuItem: {
    opacity: 1,
    transform: 'translate3d(0, 0, 0)',
    transition: '.3s ease-out',
  },
};

export default function Menu({ open }) {
  const dispatch = useDispatch();

  return (
    <div
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
              styles.bgColumn,
              styles.bgColumns[i],
              open ? styles.bgColumnOpen : { transitionDelay: '.1s' },
            ]}
          />
        ))}
      </div>
      <div
        css={[
          styles.content,
          open ? {} : styles.contentHidden,
        ]}
      >
        <ul css={styles.menuList}>
          <li
            css={[
              styles.menuItem,
              open ? styles.openMenuItem : {},
              { transitionDelay: '.1s' },
            ]}
          >
            <Link
              to="/free-insurance"
              onClick={() => dispatch(closeMenu())}
            >
              Free Insurance
            </Link>
          </li>
          <li
            css={[
              styles.menuItem,
              open ? styles.openMenuItem : {},
              { transitionDelay: '.2s' },
            ]}
          >
            <Link
              to="/subscription-insurance"
              onClick={() => dispatch(closeMenu())}
            >
              Subscription Insurance
            </Link>
          </li>
          <li
            css={[
              styles.menuItem,
              open ? styles.openMenuItem : {},
              { transitionDelay: '.3s' },
            ]}
          >
            <Link
              to="/about-us"
              onClick={() => dispatch(closeMenu())}
            >
              About us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
