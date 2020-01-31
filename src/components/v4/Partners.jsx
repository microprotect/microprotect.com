/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import Section from './Section';
import Text from '../Text';
import Title from './Title';
import GridList from './GridList';
import PartnerBox from './PartnerBox';

import { listContainer, listItem } from '../../styles/list';
import {
  BASE_MQ,
  white,
} from '../../styles/constants-v4';

import partners from '../../data/partners';

const styles = {
  container: {
    paddingTop: '10vw',
    paddingBottom: '10vw',
    background: white,
    [BASE_MQ]: {
      paddingTop: '5em',
      paddingBottom: '5em',
    },
  },
  items: {
    ...listContainer,
    margin: '2vw 0',
    textAlign: 'center',
    [BASE_MQ]: {
      margin: '2em 0',
    },
  },
  item: {
    ...listItem,
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
      <ul css={styles.items}>
        {partners.map((partner) => (
          <li
            key={partner.id}
            css={styles.item}
          >
            <Partner partner={partner} />
          </li>
        ))}
      </ul>
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
