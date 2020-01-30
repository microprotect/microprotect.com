/* @jsx jsx */

import React from 'react';

import { jsx, ClassNames } from '@emotion/core';

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
    },
  ][level - 2],
};

export default function Title(props) {
  const { className, level = 2, value } = props;

  const Heading = ['h2', 'h3'][level - 2];

  return (
    <ClassNames>
      {({ css }) => (
        <Heading
          className={[
            css(styles.title(level)),
            className,
          ].join(' ')}
        >
          <Text value={value} />
        </Heading>
      )}
    </ClassNames>
  );
}
