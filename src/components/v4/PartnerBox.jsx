/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import Box from './Box';
import Title from './Title';
import Text from '../Text';

import { BASE_MQ } from '../../styles/constants-v4';

const styles = {
  container: {
    padding: '2em',
  },
  banner: {
    display: 'block',
    margin: '0 auto',
    height: '10vw',
    [BASE_MQ]: {
      height: '50px',
    },
  },
};

export default function PartnerBox({ t, partner }) {
  return (
    <Box css={styles.container}>
      <img
        src={`assets/images/partners/${partner.image}`}
        alt={partner.title}
        css={styles.banner}
      />
      <Title level={3} value={t[`partner_title_${partner.key}`]} />
      <Text value={t[`partner_description_${partner.key}`]} />
    </Box>
  );
}
