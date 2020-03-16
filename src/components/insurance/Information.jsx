/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import products from '../../data/products-ko.json';

import {
  IconTargetImage,
  IconAgeImage,
  IconDurationImage,
  IconRegionImage,
} from '../../assets/v5';

const icons = {
  target: IconTargetImage,
  age: IconAgeImage,
  duration: IconDurationImage,
  region: IconRegionImage,
};

const styles = {
  table: {
    '& th': {
      paddingTop: '.25em',
      verticalAlign: 'top',
    },
    '& td': {
      verticalAlign: 'top',
    },
  },
  icon: {
    display: 'inline-block',
    marginTop: '-.2em',
    marginRight: '.2em',
    width: '1.4em',
    verticalAlign: 'middle',
  },
  description: {
    padding: '.2em .5em',
    color: '#2C65ED',
  },
};

export default function Information({ product }) {
  return (
    <table css={styles.table}>
      <tbody>
        {products[product].informationItems.map((item) => (
          <tr key={item.label}>
            <td>
              <img
                css={styles.icon}
                src={icons[item.icon]}
                alt=""
              />
            </td>
            <th>
              {item.label}
            </th>
            <td css={styles.description}>
              {item.description}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
