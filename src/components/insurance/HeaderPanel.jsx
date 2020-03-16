/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import {
  BASE_MQ,
  CONTENT_PADDING,
} from '../../styles/constants-v5';

import {
  ProductImage1,
  ProductImage2,
  ProductImage3,
} from '../../assets/v5';

const images = {
  carediscover: ProductImage1,
  carecollege: ProductImage2,
  privateinsurance: ProductImage3,
};

const styles = {
  container: {
    position: 'relative',
    padding: '20vw 10%',
    background: 'linear-gradient(135deg, #7AC7F8 0%, #6594F8 100%)',
    color: '#FFF',
    [BASE_MQ]: {
      padding: `5em ${CONTENT_PADDING}`,
    },
  },
  image: {
    width: '40%',
    [BASE_MQ]: {
      width: '10em',
    },
  },
  title: {
    margin: 0,
    fontSize: '6vw',
    '& small': {
      display: 'block',
      fontSize: '.7em',
    },
    [BASE_MQ]: {
      fontSize: '2em',
    },
  },
};

export default function HeaderPanel({ t, product }) {
  return (
    <div css={styles.container}>
      <img
        css={styles.image}
        src={images[product]}
        alt=""
      />
      <h1 css={styles.title}>
        <small>
          {t[`insurance_subtitle_${product}`]}
        </small>
        {t[`insurance_title_${product}`]}
      </h1>
    </div>
  );
}
