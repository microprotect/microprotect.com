/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import Title from './Title';
import FeatureLabel from './FeatureLabel';

import Box from '../Box';
import Text from '../Text';

import { BASE_MQ } from '../../styles/constants-v4';

const styles = {
  container: {
    position: 'relative',
    margin: '4vw 0',
    padding: '5vw 3vw',
    fontSize: '4vw',
    [BASE_MQ]: {
      margin: '1em 0',
      padding: '1.8em',
      paddingLeft: '9em',
      fontSize: '1.5em',
    },
  },
};

export default function FeatureBox({ t, index }) {
  return (
    <Box style={styles.container}>
      <FeatureLabel index={index} />
      <Title heavy level={3} value={t[`insurance_feature_title${index}`]} />
      <Text value={t[`insurance_feature_description${index}`]} />
    </Box>
  );
}
