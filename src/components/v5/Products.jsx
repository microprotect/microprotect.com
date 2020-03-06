/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import Section from './Section';
import Box from '../Box';
import ListContainer from '../ListContainer';
import ListItem from '../ListItem';
import Link from '../Link';
import Text from '../Text';
import ArrowButton from './ArrowButton';

import { BASE_MQ } from '../../styles/constants-v5';

import {
  ProductImage1,
  ProductImage2,
  ProductImage3,
} from '../../assets/v5';

const products = [
  {
    key: 1,
    image: ProductImage1,
    to: '/insurances/care-discover',
  },
  {
    key: 2,
    image: ProductImage2,
    to: '/insurances/care-college',
  },
  {
    key: 3,
    image: ProductImage3,
    to: '/insurances/private-insurance',
  },
];

const styles = {
  container: {
    position: 'relative',
    marginTop: '-28vw',
    [BASE_MQ]: {
      marginTop: '-10em',
    },
  },
  box: {
    padding: '1em 5%',
    borderRadius: '.3em',
    borderTopRightRadius: '5em',
    [BASE_MQ]: {
      padding: '2em 0',
    },
  },
  products: {
    [BASE_MQ]: {
      display: 'flex',
    },
  },
  product: {
    position: 'relative',
    padding: '2.1em 0',
    paddingLeft: '30%',
    borderBottom: '1px solid #E3E9F3',
    lineHeight: '140%',
    fontSize: '.85em',
    [BASE_MQ]: {
      padding: '0 2em 4.5em',
      width: '33%',
      border: 0,
      borderRight: '1px solid #E3E9F3',
    },
    '&:last-child': {
      border: 0,
    },
    '& a': {
      display: 'block',
    },
  },
  thumbnail: {
    position: 'absolute',
    top: '2em',
    left: 0,
    width: '25%',
    [BASE_MQ]: {
      position: 'relative',
      top: 'auto',
      left: 'auto',
      display: 'block',
      margin: '0 auto 1em',
      width: '80%',
    },
  },
  title: {
    margin: 0,
    fontSize: '1.7em',
    letterSpacing: '-1.5px',
    [BASE_MQ]: {
      fontSize: '1.4em',
    },
  },
  description: {
    marginTop: '1em',
    color: '#5C5C5C',
  },
  note: {
    color: '#ADB5C1',
  },
  button: {
    [BASE_MQ]: {
      position: 'absolute',
      top: 'auto',
      bottom: 0,
      left: '50%',
      right: 'auto',
      transform: 'translate3d(-50%, 0, 0)',
      display: 'block',
      width: '75%',
      fontSize: '1.2em',
    },
  },
};

export default function Products({ t }) {
  return (
    <Section style={styles.container}>
      <Box style={styles.box}>
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
                <ArrowButton
                  style={styles.button}
                  label="자세히 보기"
                />
              </Link>
            </ListItem>
          ))}
        </ListContainer>
      </Box>
    </Section>
  );
}
