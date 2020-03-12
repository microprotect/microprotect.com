/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

const styles = {
  title: {
    margin: '0 0 1em',
  },
};

export default function Title({ field, t }) {
  const { name } = field;

  return (
    <h3 css={styles.title}>
      {t[`form_title_${name}`]}
    </h3>
  );
}
