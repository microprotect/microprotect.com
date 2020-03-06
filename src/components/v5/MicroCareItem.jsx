/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import { BASE_MQ } from '../../styles/constants-v5';

import {
  TalkImage1,
  TalkImage2,
} from '../../assets/v5';

const images = [
  TalkImage1,
  TalkImage2,
];

const styles = {
  container: {
    paddingTop: '5em',
    [BASE_MQ]: {
      padding: '0 1.5em',
    },
  },
  text: {
    position: 'absolute',
    top: 0,
    left: '5%',
    width: '90%',
    transition: '.3s ease-in-out',
    [BASE_MQ]: {
      position: 'static',
      width: '100%',
    },
  },
  title: {
    margin: '0 0 .2em',
    fontsize: '1.8em',
    '& span': {
      marginRight: '.3em',
      color: '#C2D6EF',
      fontStyle: 'italic',
    },
  },
  description: {
    paddingLeft: '1.4em',
  },
  image: {
    display: 'block',
    width: '100%',
    transition: '.3s ease-in-out',
  },
  opacity: (opacity, active) => ({
    opacity: active ? 1 : opacity,
    [BASE_MQ]: {
      opacity: 1,
    },
  }),
};

export default function MicroCareItem({ t, index, active }) {
  return (
    <div css={styles.container}>
      <div css={[
        styles.text,
        styles.opacity(0, active),
      ]}
      >
        <h3 css={styles.title}>
          <span>
            {index}
            .
          </span>
          {t[`microcare_service${index}_title`]}
        </h3>
        <div css={styles.description}>
          {t[`microcare_service${index}_description`]}
        </div>
      </div>
      <img
        css={[
          styles.image,
          styles.opacity(0.5, active),
        ]}
        src={images[index - 1]}
        alt=""
      />
    </div>
  );
}
