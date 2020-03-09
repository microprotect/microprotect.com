/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import {
  IconVImage,
  IconXImage,
} from '../../assets';

const icons = {
  V: IconVImage,
  X: IconXImage,
};

const styles = {
  icon: {
    width: '2em',
    height: '2em',
  },
};

export default function Icon({ value }) {
  return (
    <img
      css={styles.icon}
      src={icons[value]}
      alt={value}
    />
  );
}
