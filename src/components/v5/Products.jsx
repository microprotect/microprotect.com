/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import Box from '../Box';
import ListContainer from '../ListContainer';
import ListItem from '../ListItem';
import Text from '../Text';
import ArrowButton from './ArrowButton';

import {
  ProductImage1,
  ProductImage2,
  ProductImage3,
} from '../../assets/v5';

const images = [
  ProductImage1,
  ProductImage2,
  ProductImage3,
];

const styles = {
  container: {
    position: 'relative',
    margin: '-2em 5% 0',
    borderRadius: '.3em',
    borderTopRightRadius: '5em',
  },
  product: {
    position: 'relative',
    padding: '2em 0',
    paddingLeft: '25%',
    borderBottom: '1px solid #E3E9F3',
    lineHeight: '140%',
    fontSize: '3vw',
  },
  thumbnail: {
    position: 'absolute',
    top: '2em',
    left: '-5%',
    width: '25%',
  },
  title: {
    margin: 0,
    fontSize: '5vw',
    letterSpacing: '-1.5px',
  },
  description: {
    marginTop: '1em',
  },
  note: {
    color: '#ADB5C1',
  },
  button: {
    right: '-6%',
  },
};

export default function Products({ t }) {
  return (
    <Box style={styles.container}>
      <ListContainer>
        {[1, 2, 3].map((index) => (
          <ListItem
            style={styles.product}
            key={index}
          >
            <img
              css={styles.thumbnail}
              src={images[index - 1]}
              alt=""
            />
            <h2 css={styles.title}>
              {t[`products_title${index}`]}
            </h2>
            <div css={styles.description}>
              <Text value={t[`products_description${index}`]} />
            </div>
            <div css={styles.note}>
              <Text value={t[`products_note${index}`]} />
            </div>
            <ArrowButton style={styles.button} />
          </ListItem>
        ))}
      </ListContainer>
    </Box>
  );
}
