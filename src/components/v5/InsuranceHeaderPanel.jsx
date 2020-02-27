/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import { BASE_MQ } from '../../styles/constants-v4';
import { mq } from '../../styles/utils';

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
    [BASE_MQ]: {
      padding: '3em 15% 1em',
      fontSize: '.8em',
    },
    [mq(1800)]: {
      padding: '3em 20% 1em',
    },
  },
  image: {
    width: '40%',
    [BASE_MQ]: {
      position: 'absolute',
      right: '20%',
      bottom: '-17%',
      width: '20%',
    },
    [mq(1800)]: {
      bottom: '-16%',
      width: '15%',
    },
  },
  title: {
    margin: 0,
    fontSize: '6vw',
    '& small': {
      display: 'block',
      fontSize: '.6em',
    },
    [BASE_MQ]: {
      fontSize: '1em',
    },
    [mq(1800)]: {
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
