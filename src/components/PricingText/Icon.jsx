import React from 'react';

import styled from '@emotion/styled';

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

const Image = styled.img(({ size }) => ({
  height: size,
}));

export default function Icon({ value }) {
  const { image, size } = icons[value];

  return (
    <Image
      src={image}
      size={size}
      alt={value}
    />
  );
}
