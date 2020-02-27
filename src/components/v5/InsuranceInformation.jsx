/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import { BASE_MQ } from '../../styles/constants-v4';

import products from '../../data/products-ko.json';

import {
  IconAgeImage,
  IconDurationImage,
  IconRegionImage,
} from '../../assets/v5';

const icons = {
  age: IconAgeImage,
  duration: IconDurationImage,
  region: IconRegionImage,
};

const styles = {
  icon: {
    display: 'inline-block',
    marginTop: '-.2em',
    marginRight: '.2em',
    width: '1.4em',
    verticalAlign: 'middle',
    [BASE_MQ]: {
      width: '1em',
    },
  },
  label: {
    [BASE_MQ]: {
      fontSize: '.4em',
    },
  },
  description: {
    padding: '.2em .5em',
    color: '#2C65ED',
    [BASE_MQ]: {
      fontSize: '.4em',
    },
  },
};

export default function InsuranceInformation({ product }) {
  return (
    <table>
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
            <th css={styles.label}>
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
