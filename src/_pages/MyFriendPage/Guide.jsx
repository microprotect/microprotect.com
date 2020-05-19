/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import ListContainer from '../../components/ListContainer';
import ListItem from '../../components/ListItem';
import Title from '../../components/Title';
import Text from '../../components/Text';

import {
  gray,
} from '../../styles/constants-v5';

import {
  MyFriendGuideImage1,
  MyFriendGuideImage2,
  MyFriendGuideImage3,
  MyFriendGuideImage4,
} from '../../assets';

const IMAGES = [
  MyFriendGuideImage1,
  MyFriendGuideImage2,
  MyFriendGuideImage3,
  MyFriendGuideImage4,
];

const styles = {
  step: {
    margin: '2em 0',
    paddingBottom: '2em',
    borderBottom: `2px solid ${gray}`,
    textAlign: 'center',
  },
  figure: {
    display: 'block',
    margin: '0 auto 1em',
    paddingLeft: '4.5%',
    width: '70%',
    maxWidth: '400px',
  },
};

export default function Guide({ t }) {
  return (
    <>
      <Title level={3} center value={t.myfriend_guide_title} />
      <ListContainer>
        {[1, 2, 3, 4].map((index) => (
          <ListItem
            key={index}
            _css={styles.step}
          >
            <img
              css={styles.figure}
              src={IMAGES[index - 1]}
              alt=""
            />
            <Text value={t[`myfriend_guide_step${index}`]} />
          </ListItem>
        ))}
      </ListContainer>
    </>
  );
}
