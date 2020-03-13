/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import Text from '../Text';

import {
  BASE_MQ,
  CONTENT_PADDING,
} from '../../styles/constants-v5';

import { IconCallImage } from '../../assets';

const styles = {
  container: {
    zIndex: 100,
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100vw',
    height: '4.5em',
    minHeight: '85px',
    background: '#F5F9FF',
    boxShadow: '0 0 10px 0 rgba(200, 200, 200, .4)',
    fontSize: '.9em',
  },
  description: {
    position: 'absolute',
    top: '50%',
    left: '5%',
    transform: 'translate3d(0, -50%, 0)',
    [BASE_MQ]: {
      left: CONTENT_PADDING,
    },
  },
  callButton: {
    position: 'absolute',
    top: '50%',
    right: '5%',
    transform: 'translate3d(0, -50%, 0)',
    paddingLeft: '3em',
    paddingRight: '1em',
    height: '2.8em',
    lineHeight: '2.8em',
    borderRadius: '1.5em',
    background: `#2B65ED url(${IconCallImage}) .4em 50% no-repeat`,
    backgroundSize: '2em',
    color: '#FFF',
    [BASE_MQ]: {
      right: CONTENT_PADDING,
    },
  },
  callText: {
    display: 'block',
    [BASE_MQ]: {
      display: 'none',
    },
  },
  phoneNumber: {
    display: 'none',
    [BASE_MQ]: {
      display: 'block',
    },
  },
};

const PHONE_NUMBER = '+49 (0)151-2622-4850';

export default function InsuranceCallBanner({ t, product }) {
  if (product !== 'privateinsurance') {
    return null;
  }

  return (
    <div css={styles.container}>
      <div css={styles.description}>
        <Text value={t.call_banner_description} />
      </div>
      <a
        css={styles.callButton}
        href={`tel:${PHONE_NUMBER}`}
      >
        <span css={styles.callText}>
          Call
        </span>
        <span css={styles.phoneNumber}>
          {PHONE_NUMBER}
        </span>
      </a>
    </div>
  );
}
