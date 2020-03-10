/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import { BASE_MQ } from '../../styles/constants-v4';

const styles = {
  container: {
    position: 'relative',
    padding: '20vw 10%',
    background: 'linear-gradient(135deg, #7AC7F8 0%, #6594F8 100%)',
    color: '#FFF',
    [BASE_MQ]: {
      padding: '5em calc((100% - 1024px) / 2)',
    },
  },
  title: {
    margin: 0,
    fontSize: '6vw',
    [BASE_MQ]: {
      fontSize: '2em',
    },
  },
};

export default function ApplicationHeaderPanel({ t, product }) {
  return (
    <div css={styles.container}>
      <h1 css={styles.title}>
        {t[`application_title_${product}`]}
      </h1>
    </div>
  );
}
