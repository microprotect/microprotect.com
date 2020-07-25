import React from 'react';

import styled from '@emotion/styled';

import Text from '../Text';

import { BASE_MQ } from '../../styles/constants-v4';

import {
  DonatePriceKoImage,
  DonatePriceEnImage,
} from '../../assets/v4';

const FIGURES = {
  ko: DonatePriceKoImage,
  en: DonatePriceEnImage,
};

const Container = styled.div({
  [BASE_MQ]: {
    position: 'absolute',
    top: '50%',
    right: '3%',
    transform: 'translate3D(0, -50%, 0)',
  },
});

const Figure = styled.img(({ locale }) => ({
  display: 'none',
  [BASE_MQ]: {
    display: 'block',
    margin: '0 auto',
    width: { ko: '80%', en: '60%' }[locale],
  },
}));

const Message = styled.div({
  fontFamily: 'S-CoreDream',
  fontSize: '4vw',
  textAlign: 'center',
  [BASE_MQ]: {
    width: '60%',
    margin: '1em auto 0',
    fontFamily: 'S-CoreDream',
    fontSize: '1.4em',
  },
});

export default function PriceExample({ t, locale }) {
  return (
    <Container>
      <Figure
        locale={locale}
        src={FIGURES[locale]}
        alt=""
      />
      <Message>
        <Text value={t.how_donate_example} />
      </Message>
    </Container>
  );
}
