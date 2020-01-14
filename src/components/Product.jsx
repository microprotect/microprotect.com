/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import Text from './Text';

import { mq } from '../styles/utils';

import {
  FeatureImage4,
  FeatureImage5,
  FeatureImage6,
  FeatureImage7,
} from '../assets';

const images = {
  4: FeatureImage4,
  5: FeatureImage5,
  6: FeatureImage6,
  7: FeatureImage7,
};

const styles = {
  container: {
    marginTop: '5em',
  },
  title: {
    margin: '2em 0',
    fontSize: '1.5em',
    [mq(1024)]: {
      marginBottom: '3em',
      fontSize: '2em',
      textAlign: 'center',
    },
  },
  features: {
    maxWidth: '1600px',
    margin: '0 auto',
    padding: 0,
    listStyle: 'none',
    [mq(1024)]: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
  },
  feature: {
    marginBottom: '2em',
    lineHeight: '145%',
    color: '#666',
    [mq(1024)]: {
      width: '48%',
    },
  },
  image: {
    width: '100%',
  },
  subtitle: {
    margin: '.8em 0',
    fontSize: '1.2em',
    color: '#000',
  },
  watch: {
    margin: '4em 0 5em',
    textAlign: 'center',
    [mq(1024)]: {
      marginTop: '2em',
    },
  },
  watchLink: {
    display: 'block',
    padding: '.6em',
    border: '1px solid #000',
    borderRadius: '4px',
    fontSize: '1.2em',
    color: '#444',
    textDecoration: 'none',
    '&:hover': {
      borderColor: '#3ed7e8',
      color: '#fff',
      background: '#3ed7e8',
    },
    [mq(1024)]: {
      display: 'inline-block',
      padding: '.3em .9em',
    },
  },
};

export default function Product({ t }) {
  return (
    <section css={styles.container}>
      <h2 css={styles.title}>
        {t.title2}
      </h2>
      <ul css={styles.features}>
        {[4, 5, 6, 7].map((index) => (
          <li
            key={t[`feature${index}_title`]}
            css={styles.feature}
          >
            <img
              css={styles.image}
              src={images[index]}
              alt=""
            />
            <h3 css={styles.subtitle}>
              {t[`feature${index}_title`]}
            </h3>
            <p>
              <Text value={t[`feature${index}_description`]} />
            </p>
          </li>
        ))}
      </ul>
      <div css={styles.watch}>
        <a
          css={styles.watchLink}
          href="https://www.youtube.com/watch?v=qG--TQhGi00"
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch the video
        </a>
      </div>
    </section>
  );
}
