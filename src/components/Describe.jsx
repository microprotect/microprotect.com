/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import { mq } from '../styles/utils';

const styles = {
  container: {
    marginTop: '4em',
    marginBottom: '4em',
    fontSize: '2.2em',
    textAlign: 'center',
    [mq(1100)]: {
      fontSize: '1.6em',
    },
  },
  items: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
  },
  item: {
    marginBottom: '.3em',
  },
};

export default function Describe({ t }) {
  return (
    <section css={styles.container}>
      <ul css={styles.items}>
        <li css={styles.item}>{t.description1}</li>
        <li css={styles.item}>{t.description2}</li>
      </ul>
    </section>
  );
}
