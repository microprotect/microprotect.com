/* @jsx jsx */

import React from 'react';

import { jsx, css } from '@emotion/core';

import Link from '../Link';
import StrongText from '../StrongText';
import InsuranceInformation from './InsuranceInformation';
import InsurancePricing from './InsurancePricing';

import underlined from '../../styles/v5/underlined';
import { BASE_MQ } from '../../styles/constants-v4';

import { CheckImage } from '../../assets/v5';

const styles = {
  container: {
    padding: '5vw 5% 10vw',
    background: '#FAFCFF',
    [BASE_MQ]: {
      padding: '1em 27% 2em',
      fontSize: '.8em',
    },
  },
  description: {
    lineHeight: '180%',
    color: '#1F1F1F',
    '& b': {
      display: 'inline-block',
      fontSize: '1.2em',
    },
    [BASE_MQ]: {
      fontSize: '.5em',
    },
  },
  title: {
    margin: '2em 0 .8em',
    paddingLeft: '1.3em',
    background: `url(${CheckImage}) 0 50% no-repeat`,
    backgroundSize: '1em',
    fontSize: '1.3em',
    [BASE_MQ]: {
      fontSize: '.7em',
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
      fontSize: '1em',
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
    <div css={styles.container}>
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
      <Link
        css={styles.button}
        to="/insurances/care-discover?version=5"
      >
        {t.insurance_application_button}
      </Link>
    </div>
  );
}
