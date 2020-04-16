/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import ReactMarkdown from 'react-markdown';

import Section from '../../components/Section';
import StrongText from '../../components/StrongText';
import WeakText from '../../components/WeakText';
import Title from '../../components/Title';
import ListContainer from '../../components/ListContainer';
import ListItem from '../../components/ListItem';
import Text from '../../components/Text';

import {
  BASE_MQ,
  backgroundColor,
  blue,
  gray,
  darkGray,
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
  container: {
    position: 'relative',
    marginTop: '-2.4em',
    paddingTop: '2em',
    borderTopLeftRadius: '2.5em',
    borderTopRightRadius: '2.5em',
    backgroundColor,
    [BASE_MQ]: {
      borderRadius: 0,
    },
  },
  description: {
    '& b': {
      fontWeight: 'normal',
      color: blue,
    },
  },
  chatTime: {
    marginTop: '2em',
    '& small': {
      fontSize: '1em',
      color: darkGray,
    },
  },
  title: {
    marginTop: '3em',
  },
  step: {
    margin: '2em 0',
    paddingBottom: '2em',
    borderBottom: `2px solid ${gray}`,
    textAlign: 'center',
  },
  figure: {
    display: 'block',
    margin: '0 auto 1em',
    paddingLeft: '8.5%',
    width: '70%',
    maxWidth: '400px',
  },
  caution: {
    color: darkGray,
    '& ol': {
      margin: '0 0 1em',
      paddingLeft: '1.3em',
    },
    '& li': {
      margin: '.4em 0',
    },
  },
};

export default function Information({ t }) {
  return (
    <Section style={styles.container}>
      <div css={styles.description}>
        <StrongText value={t.myfriend_description} />
      </div>
      <div css={styles.chatTime}>
        <WeakText value={t.myfriend_chat_time} />
      </div>
      <div css={styles.title}>
        <Title level={3} value={t.myfriend_guide} />
      </div>
      <ListContainer>
        {[1, 2, 3, 4].map((index) => (
          <ListItem
            key={index}
            style={styles.step}
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
      <div css={styles.title}>
        <Title level={3} value={t.myfriend_caution_title} />
      </div>
      <div css={styles.caution}>
        <ReactMarkdown source={t.myfriend_caution_description} />
      </div>
    </Section>
  );
}
