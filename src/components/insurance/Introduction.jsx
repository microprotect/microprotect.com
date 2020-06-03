/* @jsx jsx */

import React from 'react';

import { jsx, css } from '@emotion/core';

import ReactMarkdown from 'react-markdown';

import Section from '../Section';
import CallBanner from './CallBanner';
import Information from './Information';
import Pricing from './Pricing';

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
    marginTop: '1.5em',
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
  note: {
    marginTop: '1.5em',
    fontSize: '.8em',
    '& a': {
      textDecoration: 'underline',
    },
  },
};

const underlinedToBold = css`
  strong {
    ${underlined('#E3EAF5')}
  }
`;

function Directions({ t, product }) {
  if (product === 'privateinsurance') {
    return null;
  }

  return (
    <div css={styles.directions}>
      <ReactMarkdown source={t.insurance_careconcept_directions} />
    </div>
  );
}

export default function Introduction({ t, product }) {
  const handleClick = (event) => {
    const { target: { href: url } } = event;

    event.preventDefault();

    if (!window.ReactNativeWebView) {
      window.open(url, '_blank');
      return;
    }

    const data = JSON.stringify({
      type: 'open-document',
      url,
    });
    window.ReactNativeWebView.postMessage(data);
  };

  return (
    <Section style={styles.container}>
      <div css={[styles.description, underlinedToBold]}>
        <ReactMarkdown source={t[`insurance_description_${product}`]} />
      </div>
      <CallBanner t={t} product={product} />
      <h2 css={styles.title}>
        {t.insurance_information_title}
      </h2>
      <Information product={product} />
      <h2 css={styles.title}>
        {t.insurance_pricing_title}
      </h2>
      <Pricing t={t} product={product} />
      <p css={styles.note}>
        본 내용은 Care College의 약관에 기초하여 안내자료로 요약한 것으로
        보험금의 종류 및 지급 사유, 보험금을 지급하지 아니하는 사유 및 제반 사항 등
        기타 자세한 사항은 약관 및
        {' '}
        <a
          href="https://drive.google.com/file/d/1WyWo8L1M2zaiNmJd3CamowSo9oR1rQul/view?usp=sharing"
          onClick={handleClick}
        >
          상품설명서
        </a>
        를 참조하시기 바랍니다.
      </p>
      <Directions t={t} product={product} />
    </Section>
  );
}
