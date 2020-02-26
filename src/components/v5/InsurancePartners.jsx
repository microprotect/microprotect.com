/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import HomeTitle from './HomeTitle';
import StrongText from '../StrongText';
import Box from '../Box';

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
    padding: '7vw 5%',
    '& b': {
      fontSize: '1.1em',
    },
  },
  partners: {
    marginTop: '1em',
    fontSize: '1em',
    color: '#5C5C5C',
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
      <StrongText value={t.insurance_partners_description} />
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
