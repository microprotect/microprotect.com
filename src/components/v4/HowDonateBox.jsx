/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import HowDonatePrice from './HowDonatePrice';
import Box from '../Box';
import Text from '../Text';

import {
  BASE_MQ,
  white,
  darkGray,
} from '../../styles/constants-v4';

const styles = {
  container: {
    position: 'relative',
    margin: '13vw 0 4vw',
    padding: '5vw 7vw 3vw',
    fontSize: '4vw',
    [BASE_MQ]: {
      margin: '3em 0',
      padding: '3em 1.5em 1.2em 3.5em',
      fontSize: '1.5em',
    },
  },
  period: {
    position: 'absolute',
    top: '-8vw',
    left: '7vw',
    display: 'inline-block',
    padding: '3vw 7vw',
    background: darkGray,
    color: white,
    fontFamily: 'S-CoreDream-8',
    fontSize: '4vw',
    textTransform: 'uppercase',
    boxShadow: '0 3px 2px 0 rgba(200, 200, 200, .6)',
    [BASE_MQ]: {
      top: '-2vw',
      left: '3em',
      padding: '.8em 1.5em',
      fontSize: '1.2em',
    },
  },
};

export default function HowDonateBox({ t }) {
  return (
    <Box style={styles.container}>
      <div css={styles.period}>
        <Text value={t.how_donate_period} />
      </div>
      <HowDonatePrice t={t} />
    </Box>
  );
}
