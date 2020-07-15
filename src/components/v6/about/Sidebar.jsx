import React from 'react';

import { Link, FormattedMessage } from 'gatsby-plugin-intl';

import styled from '@emotion/styled';

import {
  BASE_MQ,
  MOBILE_PADDING_HORIZONTAL,
} from '../../../styles/constants-v6';

const ITEMS = ['purpose', 'approach'];

const Wrapper = styled.div({
  margin: '0 calc((100% - 100vw) / 2)',
  padding: `2em ${MOBILE_PADDING_HORIZONTAL}`,
  background: '#444',
  color: '#FFF',
  [BASE_MQ]: {
    position: 'absolute',
    top: 0,
    right: 0,
    margin: 0,
    width: '25%',
    background: 'transparent',
  },
});

const List = styled.ul({
  borderTop: '2px solid #FFF',
});

const Item = styled.li({
  '& a': {
    display: 'block',
    padding: '1em',
    borderBottom: '2px solid #FFF',
    textTransform: 'capitalize',
  },
});

export default function Sidebar() {
  return (
    <Wrapper>
      <List>
        {ITEMS.map((item) => (
          <Item key={item}>
            <Link to={`/about/${item}`}>
              <FormattedMessage id={`about.sidebar.${item}`} />
            </Link>
          </Item>
        ))}
      </List>
    </Wrapper>
  );
}
