/* @jsx jsx */

import React from 'react';

import { jsx, css } from '@emotion/core';

import Link from '../Link';
import StrongText from '../StrongText';
import InsuranceInformation from './InsuranceInformation';
import InsurancePricing from './InsurancePricing';

import underlined from '../../styles/v5/underlined';

import { CheckImage } from '../../assets/v5';

const styles = {
  container: {
    padding: '10vw 5%',
    background: '#FAFCFF',
  },
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
