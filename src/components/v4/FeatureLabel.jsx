/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import {
  BASE_MQ,
  white,
} from '../../styles/constants-v4';

import {
  LabelImage1,
  LabelImage2,
  LabelImage3,
  LabelImage4,
  LargeLabelImage1,
  LargeLabelImage2,
  LargeLabelImage3,
  LargeLabelImage4,
} from '../../assets/v4';

const styles = {
  container: (index) => ({
    float: 'right',
    margin: '-5vw -3vw 0 0',
    width: '3em',
    padding: '.2em .4em .6em',
    background: `url(${LabelImage1}) 100% 0 no-repeat`,
    backgroundSize: 'contain',
    color: white,
    fontFamily: 'BMJUA',
    fontSize: '8vw',
    textAlign: 'right',
    ...[
      {},
      { backgroundImage: `url(${LabelImage2})` },
      { backgroundImage: `url(${LabelImage3})` },
      { backgroundImage: `url(${LabelImage4})` },
    ][index - 1],
    [BASE_MQ]: {
      position: 'absolute',
      top: 0,
      left: 0,
      float: 'left',
      margin: 0,
      padding: '.3em .4em .8em',
      background: `url(${LargeLabelImage1}) 0 0 no-repeat`,
      backgroundSize: 'contain',
      fontSize: '3em',
      textAlign: 'left',
      ...[
        {},
        { backgroundImage: `url(${LargeLabelImage2})` },
        { backgroundImage: `url(${LargeLabelImage3})` },
        { backgroundImage: `url(${LargeLabelImage4})` },
      ][index - 1],
    },
  }),
};

export default function FeatureLabel({ index }) {
  return (
    <div css={styles.container(index)}>
      0
      {index}
    </div>
  );
}
