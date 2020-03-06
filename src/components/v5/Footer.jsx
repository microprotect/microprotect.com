/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import Text from '../Text';
import Newsletter from '../Newsletter';

import { mq } from '../../styles/utils';
import { listContainer, listItem } from '../../styles/list';

import medias from '../../data/medias';

const styles = {
  container: {
    clear: 'both',
    padding: '3em 0 6em',
    background: '#E3E9F2',
    color: '#31343d',
    fontSize: '1rem',
    '& a': {
      color: '#31343d',
      textDecoration: 'none',
    },
  },
  wrapper: {
    margin: '0 auto',
    width: '90%',
    maxWidth: '1400px',
    [mq(1024)]: {
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
    [mq(1024)]: {
      width: '31%',
      marginTop: 0,
    },
  },
  newsletter: {
    marginTop: 0,
    [mq(1024)]: {
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
    ...listItem,
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
    [mq(1024)]: {
      marginTop: '5em',
    },
  },
  mediaList: {
    ...listContainer,
  },
  mediaItem: {
    ...listItem,
    display: 'inline-block',
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
          <ul css={listContainer}>
            {['kr', 'de'].map((country) => (
              <li
                key={country}
                css={styles.addressItem}
              >
                <div css={styles.addressCountry}>
                  {t[`country_${country}`]}
                </div>
                <div>
                  <Text value={t[`address_${country}`]} />
                </div>
              </li>
            ))}
          </ul>
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
          <ul css={styles.mediaList}>
            {medias.map(({ title, url }) => (
              <li
                key={title}
                css={styles.mediaItem}
              >
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
          <div css={styles.copyright}>
            Microprotect ⓒ 2020 All Right Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
