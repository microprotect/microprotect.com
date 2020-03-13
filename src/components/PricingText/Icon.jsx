/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import {
  IconVImage,
  IconXImage,
  LogoCareConceptImage,
  LogoAllianzCareImage,
} from '../../assets';

const icons = {
  V: { image: IconVImage, size: '2em' },
  X: { image: IconXImage, size: '2em' },
  careconcept: { image: LogoCareConceptImage, size: '1em' },
  allianzcare: { image: LogoAllianzCareImage, size: '1em' },
};

export default function Icon({ value }) {
  return (
    <img
      css={{ height: icons[value].size }}
      src={icons[value].image}
      alt={value}
    />
  );
}
