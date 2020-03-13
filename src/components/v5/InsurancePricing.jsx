/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import PricingText from '../PricingText';

import products from '../../data/products-ko.json';

const styles = {
  table: (product) => ({
    width: '100%',
    marginTop: '1.5em',
    borderSpacing: 0,
    background: '#FAFCFF',
    boxShadow: '2px 2px 10px 0 rgba(200, 200, 200, 0.5)',
    '& th': {
      padding: '1em 0',
      lineHeight: '110%',
      background: '#E7EDF6',
      verticalAlign: product === 'privateinsurance' ? 'bottom' : 'top',
      fontSize: '.9em',
    },
    '& tbody td': {
      padding: '.8em',
      borderBottom: '1px solid #E7EDF6',
      textAlign: 'center',
      fontSize: '.8em',
    },
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

function renderCells(values) {
  return values.map((value, index) => (
    <td key={key(value, index)}>
      <PricingText value={value} />
    </td>
  ));
}

export default function InsurancePricing({ t, product }) {
  return (
    <table css={styles.table(product)}>
      <thead>
        <tr>
          {products[product].pricing.labels.map((label) => (
            <th key={label}>
              <PricingText value={label} />
            </th>
          ))}
        </tr>
      </thead>
      <tfoot>
        <tr>
          <td colSpan={products[product].pricing.labels.length}>
            {t[`insurance_pricing_note_${product}`]}
          </td>
        </tr>
      </tfoot>
      <tbody>
        {products[product].pricing.items.map((values, index) => (
          <tr key={key(values, index)}>
            {renderCells(values)}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
