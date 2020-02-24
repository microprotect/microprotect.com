/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

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
  },
  text: {
    position: 'absolute',
    top: 0,
    left: '5%',
    width: '90%',
    transition: '.3s ease-in-out',
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
};

export default function MicroCareItem({ t, index, active }) {
  return (
    <div css={styles.container}>
      <div css={[
        styles.text,
        { opacity: active ? 1 : 0 },
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
          { opacity: active ? 1 : 0.5 },
        ]}
        src={images[index - 1]}
        alt=""
      />
    </div>
  );
}
