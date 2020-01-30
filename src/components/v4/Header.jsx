/* @jsx jsx */

import React from 'react';
import { useDispatch } from 'react-redux';

import { jsx } from '@emotion/core';

import { setLocale } from '../../appSlice';

import { imageReplacement } from '../../styles/utils';
import clearAfter from '../../styles/clearAfter';
import {
  CONTENT_PADDING,
  BASE_MQ,
} from '../../styles/constants-v4';

import { LogoImage } from '../../assets';

const styles = {
  container: {
    zIndex: 100,
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    padding: '1em 5%',
    [BASE_MQ]: {
      padding: `1em ${CONTENT_PADDING}`,
    },
  },
  filled: {
    background: 'rgba(255, 255, 255, 0.4)',
  },
  logo: {
    float: 'left',
    display: 'block',
    width: '120px',
    height: '30px',
    [BASE_MQ]: {
      width: '250px',
      height: '46px',
    },
    ...imageReplacement(LogoImage),
  },
  languages: {
    float: 'right',
    margin: 0,
    padding: 0,
    listStyle: 'none',
  },
  languageItem: {
    float: 'left',
  },
  localeLink: {
    display: 'inline-block',
    padding: '0 .7em',
    height: '30px',
    [BASE_MQ]: {
      height: '46px',
    },
    lineHeight: 1,
    textDecoration: 'none',
  },
};

function LocaleLink({ children, locale, target }) {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(setLocale(target));
  };

  return (
    <a
      href={`?locale=${target}`}
      css={[
        styles.localeLink,
        locale === target ? { textDecoration: 'underline' } : {},
      ]}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}

export default function Header({ locale }) {
  return (
    <header
      css={[
        styles.container,
        styles.filled,
        clearAfter,
      ]}
    >
      <div id="logo" css={styles.logo}>microprotect</div>
      <ul css={styles.languages}>
        <li css={styles.languageItem}>
          <LocaleLink locale={locale} target="ko">Korean</LocaleLink>
        </li>
        <li css={styles.languageItem}>
          <LocaleLink locale={locale} target="en">English</LocaleLink>
        </li>
      </ul>
    </header>
  );
}
