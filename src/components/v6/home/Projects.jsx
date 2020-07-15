import React from 'react';

import { Link, FormattedMessage } from 'gatsby-plugin-intl';

import _ from 'lodash';

import styled from '@emotion/styled';

import { BASE_MQ } from '../../../styles/constants-v6';

import { images } from '../../../assets';

const NAMES = [
  'self-employed-insurance',
  'credit-default-insurance',
];

const List = styled.ul({
  [BASE_MQ]: {
    display: 'flex',
  },
});

const Item = styled.li(({ image }) => ({
  background: `#888 url(${image}) 50% 50% no-repeat`,
  backgroundSize: 'cover',
  [BASE_MQ]: {
    width: 'calc(100% / 3)',
  },
}));

const ItemLink = styled(Link)({
  fontSize: '10vw',
  display: 'flex',
  padding: '1em',
  width: '100%',
  height: '80vw',
  background: 'rgba(0, 0, 0, .5)',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  [BASE_MQ]: {
    fontSize: '4vw',
    height: '40vw',
    minHeight: '10em',
  },
});

export default function Projects() {
  return (
    <List>
      {NAMES.map((name) => (
        <Item
          key={name}
          image={images.projects[_.camelCase(name)]}
        >
          <ItemLink to={`/projects/${name}`}>
            <FormattedMessage id={`home.projects.${name}`} />
          </ItemLink>
        </Item>
      ))}
    </List>
  );
}
