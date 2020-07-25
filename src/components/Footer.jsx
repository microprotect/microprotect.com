/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import Text from './Text';
import Newsletter from './Newsletter';
import ListContainer from './ListContainer';
import ListItem from './ListItem';

import {
  BASE_MQ,
  CONTENT_PADDING,
} from '../styles/constants-v5';

import medias from '../data/medias';

const styles = {
  container: {
    clear: 'both',
    padding: '3em 5% 6em',
    background: '#E3E9F2',
    color: '#31343d',
    fontSize: '1rem',
    [BASE_MQ]: {
      padding: `3em ${CONTENT_PADDING} 6em`,
    },
    '& a': {
      color: '#31343d',
      textDecoration: 'none',
    },
  },
  wrapper: {
    margin: '0 auto',
    [BASE_MQ]: {
      position: 'relative',
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
    },
  },
  item: {
    marginTop: '3em',
    [BASE_MQ]: {
      width: '31%',
      marginTop: 0,
    },
  },
  newsletter: {
    marginTop: 0,
    [BASE_MQ]: {
      position: 'absolute',
      top: 0,
      right: 0,
    },
  },
  title: {
    margin: '0 0 .6em',
    fontSize: '2.3em',
  },
  addressItem: {
    marginTop: '1em',
  },
  addressCountry: {
    marginBottom: '.5em',
    wordSpacing: '.5em',
  },
  email: {
    fontSize: '1.3em',
  },
  medias: {
    [BASE_MQ]: {
      marginTop: '5em',
    },
  },
  mediaItem: {
    marginRight: '.6em',
  },
  copyright: {
    marginTop: '2em',
  },
};

export default function Footer({ t }) {
  return (
    <footer css={styles.container}>
      <div css={styles.wrapper}>
        <div css={[styles.item, styles.newsletter]}>
          <Newsletter />
        </div>
        <div css={styles.item}>
          <h2 css={styles.title}>
            Locations
          </h2>
          <ListContainer>
            {['kr', 'de'].map((country) => (
              <ListItem
                key={country}
                _css={styles.addressItem}
              >
                <div css={styles.addressCountry}>
                  {t[`country_${country}`]}
                </div>
                <div>
                  <Text value={t[`address_${country}`]} />
                </div>
              </ListItem>
            ))}
          </ListContainer>
        </div>
        <div css={styles.item}>
          <h2 css={styles.title}>
            Contacts
          </h2>
          <div css={styles.email}>
            <a href="mailto:hello@microprotect.com">hello@microprotect.com</a>
          </div>
        </div>
        <div css={[styles.item, styles.medias]}>
          <ListContainer>
            {medias.map(({ title, url }) => (
              <ListItem
                key={title}
                _css={styles.mediaItem}
                inline
              >
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {title}
                </a>
              </ListItem>
            ))}
          </ListContainer>
          <div css={styles.copyright}>
            Microprotect ⓒ 2020 All Right Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
