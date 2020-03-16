/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import Text from '../Text';

import { BASE_MQ } from '../../styles/constants-v4';

import {
  DonatePriceKoImage,
  DonatePriceEnImage,
} from '../../assets/v4';

const FIGURES = {
  ko: DonatePriceKoImage,
  en: DonatePriceEnImage,
};

const styles = {
  container: {
    [BASE_MQ]: {
      position: 'absolute',
      top: '50%',
      right: '3%',
      transform: 'translate3D(0, -50%, 0)',
    },
  },
  figure: (locale) => ({
    display: 'none',
    [BASE_MQ]: {
      display: 'block',
      margin: '0 auto',
      width: { ko: '80%', en: '60%' }[locale],
    },
  }),
  text: {
    fontFamily: 'S-CoreDream',
    fontSize: '4vw',
    textAlign: 'center',
    [BASE_MQ]: {
      width: '60%',
      margin: '1em auto 0',
      fontFamily: 'S-CoreDream',
      fontSize: '1.4em',
    },
  },
};

export default function PriceExample({ t, locale }) {
  return (
    <div css={styles.container}>
      <img
        css={styles.figure(locale)}
        src={FIGURES[locale]}
        alt=""
      />
      <div css={styles.text}>
        <Text value={t.how_donate_example} />
      </div>
    </div>
  );
}
