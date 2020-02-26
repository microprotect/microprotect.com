/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import WeakText from '../WeakText';
import StrongText from '../StrongText';

import products from '../../data/products-ko.json';

const styles = {
  table: {
    width: '100%',
    marginTop: '1.5em',
    borderSpacing: 0,
    background: '#FAFCFF',
    boxShadow: '2px 2px 10px 0 rgba(200, 200, 200, 0.5)',
    '& th': {
      padding: '.8em',
      lineHeight: '110%',
      background: '#E7EDF6',
      verticalAlign: 'top',
    },
    '& tbody td': {
      padding: '.8em',
      borderBottom: '1px solid #E7EDF6',
      textAlign: 'center',
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
      fontSize: '.6em',
    },
    '& b': {
      color: '#2C65ED',
      fontWeight: 'normal',
    },
  },
};

export default function InsurancePricing({ t, product }) {
  return (
    <table css={styles.table}>
      <thead>
        <tr>
          {products[product].pricing.labels.map((label) => (
            <th key={label}>
              <WeakText value={label} />
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
        {products[product].pricing.items.map((values) => (
          <tr key={values.join()}>
            {values.map((value) => (
              <td key={value}>
                <StrongText value={value} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
