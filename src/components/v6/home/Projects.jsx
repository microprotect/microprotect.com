import React from 'react';

import { Link, FormattedMessage } from 'gatsby-plugin-intl';

import styled from '@emotion/styled';

import { BASE_MQ } from '../../../styles/constants-v6';

const NAMES = [
  'self-employed-insurance',
];

const List = styled.ul({
  [BASE_MQ]: {
    display: 'flex',
  },
});

const Item = styled.li({
  [BASE_MQ]: {
    width: 'calc(100% / 3)',
  },
  '& a': {
    display: 'block',
    minHeight: '10em',
    background: '#888',
  },
});

export default function Projects() {
  return (
    <List>
      {NAMES.map((name) => (
        <Item key={name}>
          <Link to={`/projects/${name}`}>
            <FormattedMessage id={`home.projects.${name}`} />
          </Link>
        </Item>
      ))}
    </List>
  );
}
