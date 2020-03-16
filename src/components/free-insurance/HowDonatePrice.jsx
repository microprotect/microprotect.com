/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import StrongText from '../StrongText';
import ListContainer from '../ListContainer';
import ListItem from '../ListItem';

import {
  BASE_MQ,
  yellow,
  red,
  mint,
} from '../../styles/constants-v4';

const styles = {
  price: {
    fontSize: '3vw',
    lineHeight: '280%',
    [BASE_MQ]: {
      fontSize: '1.5em',
      lineHeight: '260%',
    },
    '& > *:last-child': {
      display: 'inline-block',
      fontSize: '1em',
      [BASE_MQ]: {
        fontSize: '.8em',
      },
    },
    '& > b': {
      marginRight: '3vw',
      fontFamily: 'S-CoreDream-8',
      fontSize: '2.2em',
      color: yellow,
      [BASE_MQ]: {
        marginRight: '.5em',
        fontSize: '1.5em',
      },
    },
    '&:nth-of-type(2) > b': {
      color: red,
    },
    '&:last-of-type > b': {
      color: mint,
    },
  },
};

export default function HowDonatePrice({ t }) {
  return (
    <ListContainer>
      {[1, 2, 3].map((index) => (
        <ListItem
          key={index}
          style={styles.price}
        >
          <StrongText value={t[`how_donate_price${index}`]} />
        </ListItem>
      ))}
    </ListContainer>
  );
}
