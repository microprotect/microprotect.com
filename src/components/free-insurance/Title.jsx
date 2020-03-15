/* @jsx jsx */

import React, { Fragment } from 'react';

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
      margin: '0 0 .7em',
      fontSize: '4.5vw',
      [BASE_MQ]: {
        fontSize: '1.5em',
      },
    },
  ][level - 2],
  heavy: {
    lineHeight: '140%',
    fontFamily: 'S-CoreDream-8',
    fontWeight: 'normal',
  },
};

export default function Title({
  style, heavy, level = 2, value,
}) {
  const Heading = ['h2', 'h3'][level - 2];

  return (
    <Heading
      css={[
        styles.title(level),
        heavy ? styles.heavy : {},
        style,
      ]}
    >
      {(value || '').split('[*]')
        .filter((i) => i)
        .map((text, index) => (
          <Fragment key={text}>
            {index > 0 && <span>•</span>}
            <Text value={text} />
          </Fragment>
        ))}
    </Heading>
  );
}
