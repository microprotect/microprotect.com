/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import Text from '../Text';

import { BASE_MQ } from '../../styles/constants-v4';

const styles = {
  title: (level) => [
    {
      fontFamily: 'BMJUA',
      fontSize: '7vw',
      textTransform: 'uppercase',
      textAlign: 'center',
      [BASE_MQ]: {
        fontSize: '3em',
      },
    },
    {
      margin: '.7em 0',
      fontSize: '1.2em',
    },
  ][level - 2],
};

export default function Title({ level = 2, value }) {
  const Heading = ['h2', 'h3'][level - 2];

  return (
    <Heading css={styles.title(level)}>
      <Text value={value} />
    </Heading>
  );
}
