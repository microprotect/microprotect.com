/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import Box from './Box';
import Title from './Title';
import Text from '../Text';

import { BASE_MQ } from '../../styles/constants-v4';

const styles = {
  container: {
    margin: 0,
    padding: '8vw',
    lineHeight: '140%',
    fontFamily: 'S-CoreDream',
    fontSize: '3.5vw',
    [BASE_MQ]: {
      padding: '2em',
      fontSize: '1em',
    },
  },
  title: {
    marginBottom: '.7em',
    lineHeight: '140%',
    fontFamily: 'S-CoreDream-8',
    fontSize: '1.4em',
    fontWeight: 'normal',
  },
};

export default function MemberBox({ member }) {
  return (
    <Box style={styles.container}>
      <Title
        style={styles.title}
        level={3}
        value={`${member.position} [*] ${member.name}`}
      />
      <Text value={member.description} />
    </Box>
  );
}
