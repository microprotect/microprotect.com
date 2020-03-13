/* @jsx jsx */

import React from 'react';

import { jsx, css } from '@emotion/core';

import ReactMarkdown from 'react-markdown';

import Section from './Section';
import InsuranceCallBanner from './InsuranceCallBanner';
import InsuranceInformation from './InsuranceInformation';
import InsurancePricing from './InsurancePricing';
import Link from '../Link';

import {
  BASE_MQ,
  backgroundColor,
} from '../../styles/constants-v5';
import underlined from '../../styles/v5/underlined';

import { CheckImage } from '../../assets/v5';

const styles = {
  container: {
    position: 'relative',
    marginTop: '-2.4em',
    paddingTop: '2em',
    borderTopLeftRadius: '2.5em',
    borderTopRightRadius: '2.5em',
    backgroundColor,
    [BASE_MQ]: {
      borderRadius: 0,
    },
  },
  description: {
    lineHeight: '180%',
    color: '#7C8195',
    '& strong': {
      display: 'inline-block',
      fontSize: '1em',
      color: '#000',
    },
    '& em': {
      fontStyle: 'normal',
      color: '#2C64EC',
    },
    '& blockquote': {
      margin: 0,
      color: '#1F1F1F',
    },
    '& hr': {
      margin: '1em 0',
      border: 0,
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
    border: 0,
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
  directions: {
    padding: '.5em',
    color: '#7C8195',
    fontSize: '.9em',
    '& h3': {
      margin: 0,
      fontSize: '1.1em',
    },
    '& ol': {
      margin: '0 0 1em',
      paddingLeft: '2em',
    },
    '& li': {
      margin: '.4em 0',
    },
  },
};

const underlinedToBold = css`
  strong {
    ${underlined('#E3EAF5')}
  }
`;

export default function InsuranceIntroduction({ t, product, tester }) {
  return (
    <Section style={styles.container}>
      <div css={[styles.description, underlinedToBold]}>
        <ReactMarkdown source={t[`insurance_description_${product}`]} />
      </div>
      <InsuranceCallBanner t={t} product={product} />
      <h2 css={styles.title}>
        {t.insurance_information_title}
      </h2>
      <InsuranceInformation product={product} />
      <h2 css={styles.title}>
        {t.insurance_pricing_title}
      </h2>
      <InsurancePricing t={t} product={product} />
      {tester && (
        <div css={styles.buttonContainer}>
          <Link
            css={styles.button}
            to="/applications/new"
          >
            {t.insurance_application_button}
          </Link>
        </div>
      )}
      {product !== 'privateinsurance' && (
        <>
          <h2 css={styles.title}>
            {t.insurance_directions_title}
          </h2>
          <div css={styles.directions}>
            <ReactMarkdown source={t.insurance_careconcept_directions} />
          </div>
        </>
      )}
    </Section>
  );
}
