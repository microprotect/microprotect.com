/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import { mq } from '../styles/utils';

const styles = {
  title: {
    margin: '0 0 2em',
    fontSize: '1.5em',
    [mq(1024)]: {
      marginBottom: '3em',
      fontSize: '2em',
      textAlign: 'center',
    },
  },
  features: {
    margin: 0,
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
      width: '31%',
    },
  },
  subtitle: {
    margin: '0 0 .8em',
    fontSize: '1.2em',
    color: '#000',
  },
  watch: {
    margin: '4em 0 5em',
    textAlign: 'center',
    [mq(1024)]: {
      marginTop: '1em',
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

export default function Insurance({ t }) {
  return (
    <section>
      <h2 css={styles.title}>
        {t.title1}
      </h2>
      <ul css={styles.features}>
        {[1, 2, 3].map((index) => (
          <li
            key={t[`feature${index}_title`]}
            css={styles.feature}
          >
            <h3 css={styles.subtitle}>
              {t[`feature${index}_title`]}
            </h3>
            {t[`feature${index}_description`]
              .match(/([^.?]+[.?])/g)
              .map((text) => (
                <p key={text}>
                  {text}
                </p>
              ))}
          </li>
        ))}
      </ul>
    </section>
  );
}
