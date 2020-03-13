/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import PricingText from '../PricingText';
import Text from '../Text';

import products from '../../data/products-ko.json';

const HEAD_ROWS_COUNT = {
  carediscover: 2,
  carecollege: 0,
  privateinsurance: 0,
};

const bodyStyle = (product) => ({
  padding: '.8em',
  borderBottom: '1px solid #E7EDF6',
  textAlign: product === 'carediscover' ? 'left' : 'center',
  fontSize: '.8em',
});

const styles = {
  table: (product) => ({
    width: '100%',
    marginTop: '1.5em',
    borderSpacing: 0,
    background: '#FAFCFF',
    boxShadow: '2px 2px 10px 0 rgba(200, 200, 200, 0.5)',
    '& thead th': {
      padding: '1em 0',
      lineHeight: '110%',
      background: '#E7EDF6',
      verticalAlign: product === 'privateinsurance' ? 'bottom' : 'top',
      fontSize: '.9em',
    },
    '& thead td': {
      ...bodyStyle(product),
      textAlign: 'center',
    },
    '& thead td:first-child': {
      textAlign: product === 'carediscover' ? 'left' : 'center',
    },
    '& tbody td': bodyStyle(product),
    '& tfoot': {
      color: '#ADB5C1',
      fontSize: '.8em',
      '& td': {
        padding: '1em',
        textAlign: 'left',
      },
    },
    '& small': {
      color: '#969CAB',
    },
    '& b': {
      color: '#2C65ED',
      fontWeight: 'normal',
    },
  }),
};

function key(value, index) {
  return `${value}-${index}`;
}

function renderCells(product, values) {
  const colSpan = product === 'carediscover' ? 2 : null;
  const size = colSpan ? 2 : values.length;
  return values.slice(0, size).map((value, index) => (
    <td
      key={key(value, index)}
      colSpan={index > 0 && colSpan}
    >
      <PricingText value={value} />
    </td>
  ));
}

export default function InsurancePricing({ t, product }) {
  const { labels, items } = products[product].pricing;

  const headRowsCount = HEAD_ROWS_COUNT[product];
  const headItems = items.slice(0, headRowsCount);
  const bodyItems = items.slice(headRowsCount, items.length);

  return (
    <table css={styles.table(product)}>
      <thead>
        <tr>
          {labels.map((label) => (
            <th key={label}>
              <PricingText value={label} />
            </th>
          ))}
        </tr>
        {headItems.map((values, index) => (
          <tr key={key(values, index)}>
            {renderCells('', values)}
          </tr>
        ))}
      </thead>
      <tfoot>
        <tr>
          <td colSpan={labels.length}>
            <Text value={t[`insurance_pricing_note_${product}`]} />
          </td>
        </tr>
      </tfoot>
      <tbody>
        {bodyItems.map((values, index) => (
          <tr key={key(values, index)}>
            {renderCells(product, values)}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
