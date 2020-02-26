/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import Box from '../Box';
import ListContainer from '../ListContainer';
import ListItem from '../ListItem';
import Link from '../Link';
import Text from '../Text';
import ArrowButton from './ArrowButton';

import {
  ProductImage1,
  ProductImage2,
  ProductImage3,
} from '../../assets/v5';

const products = [
  {
    key: 1,
    image: ProductImage1,
    to: '/insurances/care-discover?version=5',
  },
  {
    key: 2,
    image: ProductImage2,
    to: '/?version=5',
  },
  {
    key: 3,
    image: ProductImage3,
    to: '/?version=5',
  },
];

const styles = {
  container: {
    position: 'relative',
    margin: '-28vw 5% 7vw',
    padding: '1em 5%',
    borderRadius: '.3em',
    borderTopRightRadius: '5em',
  },
  product: {
    position: 'relative',
    padding: '2em 0',
    paddingLeft: '30%',
    borderBottom: '1px solid #E3E9F3',
    lineHeight: '140%',
    fontSize: '3vw',
    '&:last-child': {
      borderBottom: 0,
    },
  },
  thumbnail: {
    position: 'absolute',
    top: '2em',
    left: 0,
    width: '25%',
  },
  title: {
    margin: 0,
    fontSize: '5vw',
    letterSpacing: '-1.5px',
  },
  description: {
    marginTop: '1em',
    color: '#5C5C5C',
  },
  note: {
    color: '#ADB5C1',
  },
  button: {
    right: '-2%',
  },
};

export default function Products({ t }) {
  return (
    <Box style={styles.container}>
      <ListContainer>
        {products.map(({ key, image, to }, index) => (
          <ListItem
            style={styles.product}
            key={key}
          >
            <Link to={to}>
              <img
                css={styles.thumbnail}
                src={image}
                alt=""
              />
              <h2 css={styles.title}>
                {t[`products_title${index + 1}`]}
              </h2>
              <div css={styles.description}>
                <Text value={t[`products_description${index + 1}`]} />
              </div>
              <div css={styles.note}>
                <Text value={t[`products_note${index + 1}`]} />
              </div>
              <ArrowButton style={styles.button} />
            </Link>
          </ListItem>
        ))}
      </ListContainer>
    </Box>
  );
}
