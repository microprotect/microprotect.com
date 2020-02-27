/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import HomeTitle from './HomeTitle';
import StrongText from '../StrongText';
import Box from '../Box';

import { BASE_MQ } from '../../styles/constants-v4';
import { mq } from '../../styles/utils';

import {
  PartnerAllianzImage,
  PartnerCareConceptImage,
} from '../../assets/v5';

const images = {
  allianz: PartnerAllianzImage,
  careconcept: PartnerCareConceptImage,
};

const styles = {
  container: {
    marginBottom: '10vw',
    padding: '7vw 5%',
    '& b': {
      fontSize: '1.1em',
    },
    [BASE_MQ]: {
      marginBottom: '3em',
      padding: '1em 10%',
      fontSize: '.5em',
    },
    [mq(1800)]: {
      padding: '1em 15%',
    },
  },
  description: {
    [BASE_MQ]: {
      fontSize: '.7em',
    },
  },
  partners: {
    marginTop: '1em',
    fontSize: '1em',
    color: '#5C5C5C',
    [BASE_MQ]: {
      fontSize: '.7em',
    },
  },
  partner: (index) => [
    {
      marginBottom: '1.7em',
      paddingBottom: '1.7em',
      borderBottom: '1px solid #E3E9F3',
    },
  ][index],
  logo: {
    display: 'block',
    margin: '0 auto 1em',
    height: '2em',
  },
};

export default function InsurancePartners({ t }) {
  return (
    <div css={styles.container}>
      <HomeTitle value={t.insurance_partners_title} />
      <div css={styles.description}>
        <StrongText value={t.insurance_partners_description} />
      </div>
      <Box style={styles.partners}>
        {['allianz', 'careconcept'].map((key, index) => (
          <div
            key={key}
            style={styles.partner(index)}
          >
            <img
              css={styles.logo}
              src={images[key]}
              alt="Logo"
            />
            {t[`insurance_partners_description_${key}`]}
          </div>
        ))}
      </Box>
    </div>
  );
}
