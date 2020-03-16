/* @jsx jsx */

import React, { Fragment } from 'react';

import { jsx } from '@emotion/core';

import Text from './Text';

const styles = {
  title: (level) => [
    {
      margin: 0,
      fontSize: '2em',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      textAlign: 'center',
    },
    {
      margin: '0 0 .7em',
      fontSize: '1.3em',
      fontWeight: 'bold',
    },
  ][level - 2],
  heavy: {
    lineHeight: '140%',
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
