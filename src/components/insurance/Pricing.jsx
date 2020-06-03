/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import PricingText from '../PricingText';
import Text from '../Text';

import products from '../../data/products-ko.json';

const HEAD_ROWS_COUNT = {
  carediscover: 2,
  carecollege: 2,
  privateinsurance: 1,
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
    '& thead td:first-of-type': {
      textAlign: product === 'carediscover' ? 'left' : 'center',
    },
    '& tbody td': {
      ...bodyStyle(product),
      verticalAlign: 'top',
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
  button: {
    display: 'block',
    margin: '.5em 2em',
    padding: '.8em',
    width: 'calc(100% - 2em * 2)',
    border: '1.5px solid #2C65ED',
    borderRadius: '4px',
    background: '#FFF',
    color: '#2C65ED',
  },
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
      colSpan={index > 0 ? colSpan : null}
    >
      <PricingText value={value} />
    </td>
  ));
}

function renderPrivateInsuranceApplicationButton() {
  const { labels } = products.privateinsurance.pricing;

  const handleClick = () => {
    window.postMessage({ type: 'kakaotalk-chat' }, '*');
  };

  return (
    <tr>
      <td colSpan={labels.length}>
        <button
          css={styles.button}
          type="button"
          onClick={handleClick}
        >
          카카오톡으로 가입 상담
        </button>
      </td>
    </tr>
  );
}

function renderApplicationButton(product) {
  const render = {
    privateinsurance: renderPrivateInsuranceApplicationButton,
  }[product];

  return render ? render() : null;
}

export default function Pricing({ t, product }) {
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
        {renderApplicationButton(product)}
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
