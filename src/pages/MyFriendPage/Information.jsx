/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import ReactMarkdown from 'react-markdown';

import Section from '../../components/Section';

import {
  BASE_MQ,
  backgroundColor,
  darkGray,
  black,
} from '../../styles/constants-v5';
import { imageReplacement } from '../../styles/utils';

import { MyFriendImage } from '../../assets';

const styles = {
  container: {
    position: 'relative',
    paddingTop: '7em',
    paddingBottom: '5em',
    backgroundColor,
    [BASE_MQ]: {
      paddingTop: '8em',
      paddingBottom: '8em',
    },
  },
  brand: {
    ...imageReplacement(MyFriendImage),
    margin: '0 0 2em',
    height: 0,
    paddingBottom: `${(372 / 982) * 100}%`,
  },
  description: {
    '& p': {
      marginBottom: '1.4em',
    },
    '& h3': {
      margin: '0 0 .3em',
      fontSize: '1.6em',
    },
    '& blockquote': {
      margin: '4em 0',
      color: darkGray,
      fontSize: '0.9em',
      '& h3': {
        color: black,
        fontSize: '1em',
      },
    },
    '& ol': {
      margin: '.5em 0',
    },
    '& li': {
      marginBottom: '.5em',
    },
  },
  button: {
    marginTop: '2em',
    padding: '1em 0',
    width: '100%',
    border: 0,
    backgroundColor: '#FDE104',
    color: black,
    fontSize: '1.5em',
    fontWeight: 'bold',
  },
};

export default function Information({ t }) {
  const handleClick = () => {
    window.postMessage({ type: 'myfriend-chat' }, '*');
  };

  return (
    <Section style={styles.container}>
      <h1 css={styles.brand}>
        {t.myfriend_title}
      </h1>
      <div css={styles.description}>
        <ReactMarkdown source={t.myfriend_description} />
      </div>
      <button
        type="button"
        css={styles.button}
        onClick={handleClick}
      >
        병원 통역 신청하기
      </button>
    </Section>
  );
}
