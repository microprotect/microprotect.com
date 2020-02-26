/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import {
  ProductImage1,
} from '../../assets/v5';

const images = {
  carediscover: ProductImage1,
};

const styles = {
  container: {
    position: 'relative',
    padding: '20vw 10%',
    background: 'linear-gradient(135deg, #7AC7F8 0%, #6594F8 100%)',
    color: '#FFF',
  },
  image: {
    width: '40%',
  },
  title: {
    margin: 0,
    fontSize: '6vw',
    '& small': {
      display: 'block',
      fontSize: '.7em',
    },
  },
};

export default function InsuranceHeaderPanel({ t, product }) {
  return (
    <div css={styles.container}>
      <img
        css={styles.image}
        src={images[product]}
        alt=""
      />
      <h1 css={styles.title}>
        {t[`insurance_title_${product}`]}
        <small>
          {t[`insurance_subtitle_${product}`]}
        </small>
      </h1>
    </div>
  );
}
