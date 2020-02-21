/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import Box from '../Box';
import Title from './Title';
import Text from '../Text';

const styles = {
  container: {
    lineHeight: '140%',
    fontFamily: 'S-CoreDream',
  },
};

export default function MemberBox({ member }) {
  const { position, name, description } = member;

  return (
    <Box style={styles.container}>
      <Title heavy level={3} value={`${position} [*] ${name}`} />
      <Text value={description} />
    </Box>
  );
}
