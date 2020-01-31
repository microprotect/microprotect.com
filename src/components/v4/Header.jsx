/* @jsx jsx */

import React, { useState, useEffect } from 'react';

import { jsx } from '@emotion/core';

import { useDispatch } from 'react-redux';

import { setLocale } from '../../appSlice';

import { imageReplacement } from '../../styles/utils';
import clearAfter from '../../styles/clearAfter';
import { listContainer, listItem } from '../../styles/list';
import {
  CONTENT_PADDING,
  BASE_MQ,
  black,
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
    backgroundColor: 'rgba(255, 255, 255, 0)',
    boxShadow: '0 0 6px 0 rgba(200, 200, 200, 0)',
    transition: '.3s ease-out',
    [BASE_MQ]: {
      padding: `1em ${CONTENT_PADDING}`,
    },
  },
  filled: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    boxShadow: '0 0 6px 0 rgba(200, 200, 200, .5)',
  },
  logo: {
    float: 'left',
    display: 'block',
    width: '120px',
    height: '30px',
    cursor: 'pointer',
    [BASE_MQ]: {
      width: '250px',
      height: '46px',
    },
    ...imageReplacement(LogoImage),
  },
  languages: {
    ...listContainer,
    float: 'right',
  },
  languageItem: {
    ...listItem,
    float: 'left',
  },
  localeLink: {
    display: 'inline-block',
    padding: '0 .7em',
    height: '30px',
    lineHeight: '30px',
    color: black,
    opacity: 0.5,
    textDecoration: 'none',
    [BASE_MQ]: {
      height: '46px',
      lineHeight: '46px',
      fontSize: '1.3em',
    },
  },
  current: {
    opacity: 1,
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
        locale === target ? styles.current : {},
      ]}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}

function handleClickLogo() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
}

export default function Header({ locale }) {
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
      <div
        id="logo"
        css={styles.logo}
        role="button"
        aria-hidden="true"
        onClick={handleClickLogo}
      >
        Microprotect
      </div>
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
