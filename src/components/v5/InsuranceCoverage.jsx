/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import WeakText from '../WeakText';

import products from '../../data/products-ko.json';

import { BASE_MQ } from '../../styles/constants-v4';

const styles = {
  container: {
    padding: '5vw 5% 10vw',
    background: '#FAFCFF',
    [BASE_MQ]: {
      padding: '1em 27% 2em',
      fontSize: '.8em',
    },
  },
  table: {
    width: '100%',
    marginTop: '1.5em',
    borderSpacing: 0,
    background: '#FFF',
    boxShadow: '2px 2px 10px 0 rgba(200, 200, 200, 0.5)',
    lineHeight: '130%',
    [BASE_MQ]: {
      fontSize: '.4em',
    },
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
            <tr key={values.join()}>
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
