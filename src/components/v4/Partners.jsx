/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import Title from './Title';
import PartnerBox from './PartnerBox';

import { listContainer, listItem } from '../../styles/list';
import {
  BASE_MQ,
  CONTENT_PADDING,
} from '../../styles/constants-v4';

import partners from '../../data/partners';

const styles = {
  container: {
    padding: '10vw 5%',
    [BASE_MQ]: {
      padding: `5em ${CONTENT_PADDING}`,
    },
  },
  items: {
    ...listContainer,
    textAlign: 'center',
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
  partners: {
    ...listContainer,
    [BASE_MQ]: {
      display: 'flex',
      flexWrap: 'wrap',
    },
  },
  partner: {
    ...listItem,
    [BASE_MQ]: {
      width: '50%',
      paddingRight: '2%',
      '&:nth-of-type(even)': {
        paddingRight: 0,
        paddingLeft: '2%',
      },
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
    <div css={styles.container}>
      <Title value={t.partners_title} />
      <ul css={styles.items}>
        {partners.map((partner) => (
          <li
            key={partner.key}
            css={styles.item}
          >
            <Partner partner={partner} />
          </li>
        ))}
      </ul>
      <ul css={styles.partners}>
        {partners.map((partner) => (
          <li
            key={partner.key}
            css={styles.partner}
          >
            <PartnerBox t={t} partner={partner} />
          </li>
        ))}
      </ul>
    </div>
  );
}
