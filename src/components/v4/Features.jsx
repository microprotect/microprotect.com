/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import Section from './Section';
import ListContainer from '../ListContainer';
import ListItem from '../ListItem';
import FeatureBox from './FeatureBox';

export default function Features({ t }) {
  return (
    <Section>
      <ListContainer>
        {[1, 2, 3, 4].map((index) => (
          <ListItem key={index}>
            <FeatureBox t={t} index={index} />
          </ListItem>
        ))}
      </ListContainer>
    </Section>
  );
}
