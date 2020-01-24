/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import { mq } from '../styles/utils';

import {
  PartnerTrueBalanceImage,
  PartnerHanwhaImage,
  PartnerGiveAsiaImage,
} from '../assets';

const PARTNERS = ['truebalance', 'hanwha', 'giveasia'];

const IMAGES = {
  truebalance: PartnerTrueBalanceImage,
  hanwha: PartnerHanwhaImage,
  giveasia: PartnerGiveAsiaImage,
};

const BASE_MQ = mq(640);

const styles = {
  container: {
    margin: '3em 5%',
  },
  partner: {
    margin: '3em 0',
  },
  logo: {
    height: '50px',
    maxWidth: '100%',
  },
  description: {
    fontSize: '1.5em',
    [BASE_MQ]: {
      fontSize: '1.3em',
    },
    [mq(1800)]: {
      fontSize: '2em',
    },
  },
  donateButton: {
    margin: '.8em 0',
    padding: 0,
    border: 0,
    background: 'transparent',
    fontFamily: 'helvetica',
    fontSize: '1.3em',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textDecoration: 'underline',
    color: '#43d4c3',
  },
};

function DonateButton() {
  const handleClick = () => {
    window.postMessage({ type: 'open-give-asia' }, '*');
  };

  return (
    <button
      css={styles.donateButton}
      type="button"
      onClick={handleClick}
    >
      Please Donate
    </button>
  );
}

export default function FreeInsurancePartners({ t }) {
  return (
    <div css={styles.container}>
      {PARTNERS.map((partner) => (
        <div
          key={partner}
          css={styles.partner}
        >
          <h2>
            <img
              css={styles.logo}
              src={IMAGES[partner]}
              alt={t[`free_insurance_${partner}_title`]}
            />
          </h2>
          <p css={styles.description}>
            {t[`free_insurance_${partner}_description`]}
          </p>
          {partner === 'giveasia' && <DonateButton />}
        </div>
      ))}
    </div>
  );
}
