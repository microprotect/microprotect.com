/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import NullPart from './NullPart';
import StrongText from './StrongText';
import SmallText from './SmallText';
import Icon from './Icon';
import Text from '../Text';

const NULL_PART = { type: null };

function key(text, index) {
  return `${text}-${index}`;
}

function splitStrongText(text) {
  return text.split('*').map((value, index) => ({
    type: ['text', 'strong'][index % 2],
    value,
  }));
}

function splitWeakText(text) {
  return text.split('_').map((value, index) => ({
    type: ['text', 'small'][index % 2],
    value,
  }));
}

function splitStrongAndWeakText(text) {
  return splitStrongText(text).reduce((acc, part) => [
    ...acc,
    ...(part.type === 'text' ? splitWeakText(part.value) : [part]),
  ], []);
}

function splitIcon(value, symbol, next) {
  return value.split(`(${symbol})`).reduce((acc, text, index) => [
    ...acc,
    index !== 0 ? { type: 'icon', value: symbol } : NULL_PART,
    ...next(text),
  ], []);
}

function renderPart(type, value) {
  const Part = {
    text: Text,
    strong: StrongText,
    small: SmallText,
    icon: Icon,
  }[type] || NullPart;

  return (
    <Part value={value} />
  );
}

function renderParts(parts) {
  return (
    <>
      {parts.map(({ type, value }, index) => (
        <span key={key(value, index)}>
          {renderPart(type, value)}
        </span>
      ))}
    </>
  );
}

export default function Index({ value = '' }) {
  const parts = splitIcon(value, 'V', (text) => (
    splitIcon(text, 'X', splitStrongAndWeakText)
  ));

  return renderParts(parts);
}
