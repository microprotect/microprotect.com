/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import Box from '../Box';
import Title from './Title';
import Text from '../Text';

import { BASE_MQ } from '../../styles/constants-v4';

const styles = {
  banner: {
    display: 'block',
    margin: '0 auto .7em',
    height: '10vw',
    [BASE_MQ]: {
      height: '50px',
    },
  },
};

export default function PartnerBox({ t, partner }) {
  const { id, image } = partner;

  return (
    <Box>
      <img
        src={`assets/images/partners/${image}`}
        alt={t[`partner_title_${id}`]}
        css={styles.banner}
      />
      <Title level={3} value={t[`partner_title_${id}`]} />
      <Text value={t[`partner_description_${id}`]} />
    </Box>
  );
}
