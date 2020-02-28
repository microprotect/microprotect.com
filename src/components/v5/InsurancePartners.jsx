/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import Section from './Section';
import HomeTitle from './HomeTitle';
import StrongText from '../StrongText';
import Box from '../Box';

import { BASE_MQ } from '../../styles/constants-v4';

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
    '& b': {
      fontSize: '1.1em',
    },
  },
  description: {
    [BASE_MQ]: {
      marginBottom: '2em',
      textAlign: 'center',
    },
  },
  partners: {
    marginTop: '1em',
    fontSize: '1em',
    color: '#5C5C5C',
    [BASE_MQ]: {
      display: 'flex',
      padding: '3em 0',
    },
  },
  partnerBorder: (index) => [
    {
      marginBottom: '1.7em',
      paddingBottom: '1.7em',
      borderBottom: '1px solid #E3E9F3',
      [BASE_MQ]: {
        border: 0,
        borderRight: '1px solid #E3E9F3',
      },
    },
  ][index],
  partner: {
    [BASE_MQ]: {
      margin: 0,
      padding: '0 2em',
      width: '50%',
    },
  },
  logo: {
    display: 'block',
    margin: '0 auto 1em',
    height: '2em',
  },
};

export default function InsurancePartners({ t }) {
  return (
    <Section style={styles.container}>
      <HomeTitle value={t.insurance_partners_title} />
      <div css={styles.description}>
        <StrongText value={t.insurance_partners_description} />
      </div>
      <Box style={styles.partners}>
        {['allianz', 'careconcept'].map((key, index) => (
          <div
            key={key}
            css={[
              styles.partnerBorder(index),
              styles.partner,
            ]}
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
    </Section>
  );
}
