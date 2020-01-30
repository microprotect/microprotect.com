/* eslint-disable react/jsx-props-no-spreading */

/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import Text from '../Text';

import { BASE_MQ } from '../../styles/constants-v4';

const styles = {
  title: (level) => [
    {
      margin: 0,
      fontFamily: 'BMJUA',
      fontSize: '7vw',
      fontWeight: 'normal',
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

export default function Title(props) {
  const { level = 2, value } = props;

  const Heading = ['h2', 'h3'][level - 2];

  return (
    <Heading {...props} css={styles.title(level)}>
      <Text value={value} />
    </Heading>
  );
}
