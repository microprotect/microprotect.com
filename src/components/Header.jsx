/* @jsx jsx */

import React from 'react';
import { useDispatch } from 'react-redux';

import { css, jsx } from '@emotion/core';

import { setLocale } from '../appSlice';

import { mq, imageReplacement } from '../styles/utils';
import clearAfter from '../styles/clearAfter';

import { LogoImage } from '../assets';

const styles = {
  container: {
    margin: '1.5em auto 0',
    width: '95%',
    maxWidth: '1550px',
  },
  logo: {
    float: 'left',
    display: 'block',
    width: '120px',
    height: '30px',
    [mq(1100)]: {
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
    [mq(1100)]: {
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
    <header css={[styles.container, clearAfter]}>
      <div id="logo" css={styles.logo}>microprotect</div>
      <ul css={styles.languages}>
        <li css={styles.languageItem}>
          <LocaleLink locale={locale} target="ko">Korean</LocaleLink>
        </li>
        <li css={css(styles.languageItem)}>
          <LocaleLink locale={locale} target="en">English</LocaleLink>
        </li>
      </ul>
    </header>
  );
}
