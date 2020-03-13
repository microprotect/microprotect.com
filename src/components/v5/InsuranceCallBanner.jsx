/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import StrongText from '../StrongText';

import { IconCallImage } from '../../assets';

const styles = {
  container: {
    margin: '4em 0 3em',
    fontSize: '.9em',
    textAlign: 'center',
  },
  description: {
    marginBottom: '1em',
    '& b': {
      display: 'inline-block',
      fontSize: '1.1em',
    },
  },
  callButton: {
    display: 'inline-block',
    paddingLeft: '3em',
    paddingRight: '1em',
    height: '2.8em',
    lineHeight: '2.8em',
    borderRadius: '1.5em',
    background: `#2B65ED url(${IconCallImage}) .4em 50% no-repeat`,
    backgroundSize: '2em',
    color: '#FFF',
  },
};

const PHONE_NUMBER = '06196-7691774';

export default function InsuranceCallBanner({ t, product }) {
  if (product !== 'privateinsurance') {
    return null;
  }

  return (
    <div css={styles.container}>
      <div css={styles.description}>
        <StrongText value={t.call_banner_description} />
      </div>
      <a
        css={styles.callButton}
        href={`tel:${PHONE_NUMBER}`}
      >
        {PHONE_NUMBER}
      </a>
    </div>
  );
}
