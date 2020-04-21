/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import PartnerBox from './PartnerBox';

import Section from '../../components/Section';
import Text from '../../components/Text';
import ListContainer from '../../components/ListContainer';
import ListItem from '../../components/ListItem';
import GridList from '../../components/GridList';
import Title from '../../components/free-insurance/Title';

import {
  BASE_MQ,
} from '../../styles/constants-v5';

import partners from '../../data/partners';

const styles = {
  container: {
    paddingBottom: '10vw',
    [BASE_MQ]: {
      paddingBottom: '5em',
    },
  },
  items: {
    margin: '2vw 0',
    textAlign: 'center',
    [BASE_MQ]: {
      margin: '2em 0',
    },
  },
  item: {
    display: 'inline-block',
    margin: '1vw 3vw',
    verticalAlign: 'middle',
    [BASE_MQ]: {
      margin: '1em',
    },
  },
  banner: {
    height: '5vw',
    filter: 'grayscale(100%)',
    [BASE_MQ]: {
      height: '50px',
    },
  },
};

function Partner({ partner }) {
  return (
    <a
      href={partner.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={`assets/images/partners/${partner.image}`}
        alt={partner.title}
        css={styles.banner}
      />
    </a>
  );
}

export default function Partners({ t }) {
  return (
    <Section style={styles.container}>
      <Title value={t.partners_title} />
      <ListContainer style={styles.items}>
        {partners.map((partner) => (
          <ListItem
            key={partner.id}
            style={styles.item}
          >
            <Partner partner={partner} />
          </ListItem>
        ))}
      </ListContainer>
      <GridList
        items={partners}
        render={(item) => (
          <PartnerBox t={t} partner={item} />
        )}
        renderMore={() => (
          <Text value="More about" />
        )}
      />
    </Section>
  );
}
