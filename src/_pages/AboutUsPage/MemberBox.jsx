/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import Box from '../../components/Box';
import Title from '../../components/Title';
import Text from '../../components/Text';

const styles = {
  container: {
    lineHeight: '140%',
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
