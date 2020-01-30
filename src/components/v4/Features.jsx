/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import Box from './Box';
import Title from './Title';
import Text from '../Text';

import { listContainer, listItem } from '../../styles/list';

import {
  BASE_MQ,
  CONTENT_PADDING,
  backgroundColor,
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
  container: {
    padding: '10vw 5% 10px',
    backgroundColor,
    [BASE_MQ]: {
      padding: `5em ${CONTENT_PADDING} 10px`,
    },
  },
  features: {
    ...listContainer,
  },
  feature: {
    ...listItem,
  },
  box: {
    position: 'relative',
    margin: '4vw 0',
    padding: '5vw 2vw',
    fontSize: '4vw',
    [BASE_MQ]: {
      margin: '1em 0',
      padding: '1.8em',
      paddingLeft: '9em',
      fontSize: '1.5em',
    },
  },
  label: (index) => ({
    position: 'absolute',
    top: 0,
    right: 0,
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
      left: 0,
      right: 'auto',
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
  featureTitle: {
    margin: '0 0 1em',
    width: '75%',
    fontFamily: 'S-CoreDream-8',
    fontSize: '4vw',
    [BASE_MQ]: {
      marginBottom: '.7em',
      fontSize: '1.2em',
    },
  },
};

function Label({ index }) {
  return (
    <div css={styles.label(index)}>
      0
      {index}
    </div>
  );
}

function Feature({ t, index }) {
  return (
    <Box css={styles.box}>
      <Label index={index} />
      <Title
        css={styles.featureTitle}
        level={3}
        value={t[`insurance_feature_title${index}`]}
      />
      <Text value={t[`insurance_feature_description${index}`]} />
    </Box>
  );
}

export default function Features({ t }) {
  return (
    <div css={styles.container}>
      <ul css={styles.features}>
        {[1, 2, 3, 4].map((index) => (
          <li
            key={index}
            css={styles.feature}
          >
            <Feature t={t} index={index} />
          </li>
        ))}
      </ul>
    </div>
  );
}
