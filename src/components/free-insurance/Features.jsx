import React from 'react';

import ListContainer from '../ListContainer';
import ListItem from '../ListItem';

import Section from './Section';
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
