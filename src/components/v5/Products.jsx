/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import Box from '../Box';
import ListContainer from '../ListContainer';
import ListItem from '../ListItem';
import Link from '../Link';
import Text from '../Text';
import ArrowButton from './ArrowButton';

import { BASE_MQ } from '../../styles/constants-v4';
import { mq } from '../../styles/utils';

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
    [BASE_MQ]: {
      margin: '-2em 10% 1em',
      padding: '1em 0',
      borderTopRightRadius: '3em',
    },
    [mq(1800)]: {
      margin: '-2em auto 1em',
      width: '70%',
      fontSize: '.7em',
    },
  },
  products: {
    [BASE_MQ]: {
      display: 'flex',
      paddingLeft: '.5em',
    },
    [mq(1800)]: {
      paddingLeft: '.7em',
    },
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
    [BASE_MQ]: {
      padding: 0,
      paddingLeft: '1.5em',
      width: '30%',
      fontSize: '.7em',
      borderBottom: 0,
      borderRight: '1px solid #E3E9F3',
      '&:last-child': {
        borderRight: 0,
      },
    },
  },
  thumbnail: {
    position: 'absolute',
    top: '2em',
    left: 0,
    width: '25%',
    [BASE_MQ]: {
      position: 'static',
      display: 'block',
      margin: '0 auto',
      top: 0,
      width: '3.5em',
    },
  },
  title: {
    margin: 0,
    fontSize: '5vw',
    letterSpacing: '-1.5px',
    [BASE_MQ]: {
      display: 'inline-block',
      fontSize: '.7em',
    },
    [mq(1800)]: {
      paddingLeft: '10%',
    },
  },
  description: {
    marginTop: '1em',
    color: '#5C5C5C',
    [BASE_MQ]: {
      marginTop: '.3em',
      fontSize: '.45em',
      lineHeight: '140%',
    },
    [mq(1800)]: {
      paddingLeft: '10%',
    },
  },
  note: {
    color: '#ADB5C1',
  },
  button: {
    right: '-2%',
    [BASE_MQ]: {
      display: 'none',
    },
  },
};

export default function Products({ t }) {
  return (
    <Box style={styles.container}>
      <ListContainer style={styles.products}>
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
