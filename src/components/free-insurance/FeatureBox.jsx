import React from 'react';

import styled from '@emotion/styled';

import Title from './Title';
import FeatureLabel from './FeatureLabel';

import Box from '../Box';
import Text from '../Text';

import { BASE_MQ } from '../../styles/constants-v4';

const Container = styled(Box)({
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
});

export default function FeatureBox({ t, index }) {
  return (
    <Container>
      <FeatureLabel index={index} />
      <Title heavy level={3} value={t[`insurance_feature_title${index}`]} />
      <Text value={t[`insurance_feature_description${index}`]} />
    </Container>
  );
}
