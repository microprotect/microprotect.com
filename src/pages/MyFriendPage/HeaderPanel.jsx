/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import {
  BASE_MQ,
  CONTENT_PADDING,
} from '../../styles/constants-v5';

import {
  MyFriendImage,
} from '../../assets';

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

export default function HeaderPanel({ t }) {
  return (
    <div css={styles.container}>
      <img
        css={styles.image}
        src={MyFriendImage}
        alt=""
      />
      <h1 css={styles.title}>
        <small>
          {t.myfriend_subtitle}
        </small>
        {t.myfriend_title}
      </h1>
    </div>
  );
}
