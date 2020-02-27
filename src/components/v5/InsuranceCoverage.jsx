/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import WeakText from '../WeakText';

import products from '../../data/products-ko.json';

const styles = {
  container: {
    padding: '10vw 5%',
    background: '#FAFCFF',
  },
  table: {
    width: '100%',
    marginTop: '1.5em',
    borderSpacing: 0,
    background: '#FFF',
    boxShadow: '2px 2px 10px 0 rgba(200, 200, 200, 0.5)',
    lineHeight: '130%',
    '& th': {
      padding: '.8em',
      background: '#E7EDF6',
      verticalAlign: 'top',
      textAlign: 'left',
    },
    '& tbody td': {
      padding: '.8em',
      borderBottom: '1px solid #E7EDF6',
      textAlign: 'left',
      fontSize: '.9em',
    },
    '& small': {
      color: '#969CAB',
      fontSize: '.8em',
    },
  },
};

export default function InsuranceCoverage({ product }) {
  return (
    <div css={styles.container}>
      <table css={styles.table}>
        <tbody>
          <tr>
            {products[product].coverage.labels.map((label) => (
              <th key={label}>
                <WeakText value={label} />
              </th>
            ))}
          </tr>
          {products[product].coverage.items.map((values) => (
            <tr>
              {values.map((value) => (
                <td key={value}>
                  <WeakText value={value} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
