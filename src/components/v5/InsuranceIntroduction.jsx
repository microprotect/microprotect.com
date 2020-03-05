/* @jsx jsx */

import React from 'react';

import { jsx, css } from '@emotion/core';

import Section from './Section';
import Link from '../Link';
import StrongText from '../StrongText';
import InsuranceInformation from './InsuranceInformation';
import InsurancePricing from './InsurancePricing';

import { BASE_MQ } from '../../styles/constants-v5';
import underlined from '../../styles/v5/underlined';

import { CheckImage } from '../../assets/v5';

const styles = {
  description: {
    lineHeight: '180%',
    color: '#1F1F1F',
    '& b': {
      display: 'inline-block',
      fontSize: '1.2em',
    },
  },
  title: {
    margin: '2em 0 .8em',
    paddingLeft: '1.3em',
    background: `url(${CheckImage}) 0 50% no-repeat`,
    backgroundSize: '1em',
    fontSize: '1.3em',
  },
  buttonContainer: {
    [BASE_MQ]: {
      textAlign: 'center',
    },
  },
  button: {
    display: 'block',
    margin: '2em auto .5em',
    padding: '.6em 0',
    width: '85%',
    borderRadius: '2em',
    fontSize: '1.5em',
    background: '#2D65ED',
    color: '#FFF',
    textAlign: 'center',
    [BASE_MQ]: {
      display: 'inline-block',
      padding: '.6em 2.5em',
      width: 'auto',
    },
  },
};

const underlinedToBold = css`
  b {
    ${underlined('#E3EAF5')}
  }
`;

export default function InsuranceIntroduction({ t, product }) {
  return (
    <Section>
      <div css={[styles.description, underlinedToBold]}>
        <StrongText value={t[`insurance_description_${product}`]} />
      </div>
      <h2 css={styles.title}>
        {t.insurance_information_title}
      </h2>
      <InsuranceInformation product={product} />
      <h2 css={styles.title}>
        {t.insurance_pricing_title}
      </h2>
      <InsurancePricing t={t} product={product} />
      <div css={styles.buttonContainer}>
        <Link
          css={styles.button}
          to="/insurances/care-discover?version=5"
        >
          {t.insurance_application_button}
        </Link>
      </div>
    </Section>
  );
}
