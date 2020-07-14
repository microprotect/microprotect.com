import React from 'react';

import { Link } from 'gatsby-plugin-intl';

import styled from '@emotion/styled';

import {
  BASE_MQ,
  MOBILE_PADDING_HORIZONTAL,
} from '../../../styles/constants-v6';

const Wrapper = styled.div({
  margin: '0 calc((100% - 100vw) / 2)',
  padding: `2em ${MOBILE_PADDING_HORIZONTAL}`,
  [BASE_MQ]: {
    position: 'absolute',
    top: 0,
    right: 0,
    margin: 0,
    padding: 0,
    width: '25%',
    background: 'transparent',
  },
});

const List = styled.ul({
  borderTop: '2px solid #040A1E',
});

const Item = styled.li({});

const ItemLink = styled(Link)({
  display: 'block',
  padding: '1em',
  borderBottom: '2px solid #040A1E',
  color: '#000',
  textTransform: 'capitalize',
});

export default function Sidebar() {
  return (
    <Wrapper>
      <List>
        <Item>
          <ItemLink to="/about/purpose">See our purpose</ItemLink>
        </Item>
        <Item>
          <ItemLink to="/about/approach">See our approach</ItemLink>
        </Item>
      </List>
    </Wrapper>
  );
}
