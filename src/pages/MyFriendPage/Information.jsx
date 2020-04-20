/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import ReactMarkdown from 'react-markdown';

import Section from '../../components/Section';

import Guide from './Guide';

import {
  BASE_MQ,
  backgroundColor,
  darkGray,
  black,
  red,
} from '../../styles/constants-v5';
import { imageReplacement } from '../../styles/utils';
import multilinesOnDesktop from '../../styles/multilinesOnDesktop';

import {
  MyFriendImage,
} from '../../assets';

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
    marginBottom: '4em',
    '& p': {
      marginBottom: '1.4em',
    },
    '& h3': {
      margin: '0 0 .3em',
      fontSize: '1.6em',
    },
    '& blockquote': {
      margin: '3em 0',
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
    margin: '1em 0 3em',
    padding: '1em 0',
    width: '100%',
    border: 0,
    backgroundColor: '#FDE104',
    color: black,
    fontSize: '1.5em',
    fontWeight: 'bold',
    [BASE_MQ]: {
      display: 'none',
    },
  },
  mobileOnly: {
    display: 'none',
    margin: '1em 0 3em',
    padding: '1em 0',
    color: red,
    fontSize: '1.5em',
    fontWeight: 'bold',
    textAlign: 'center',
    [BASE_MQ]: {
      display: 'block',
    },
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
      <div css={[styles.description, multilinesOnDesktop]}>
        <ReactMarkdown source={t.myfriend_description} />
      </div>
      <Guide t={t} />
      <button
        type="button"
        css={styles.button}
        onClick={handleClick}
      >
        {t.myfriend_request_button}
      </button>
      <div css={styles.mobileOnly}>
        {t.myfriend_mobile_only}
      </div>
      <div css={styles.description}>
        <ReactMarkdown source={t.myfriend_caution} />
      </div>
    </Section>
  );
}
