/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import Title from './Title';
import Text from '../Text';
import BossVideo from '../BossVideo';
import GridList from './GridList';
import MemberBox from './MemberBox';

import { BASE_MQ, CONTENT_PADDING } from '../../styles/constants-v4';

const styles = {
  container: {
    padding: '10vw 5%',
    [BASE_MQ]: {
      padding: `5em ${CONTENT_PADDING}`,
    },
  },
};

function members(t) {
  return [...Array(13)].map((_, i) => i + 1)
    .map((i) => (
      {
        id: i,
        position: t[`member_position${i}`],
        name: t[`member_name${i}`],
        description: t[`member_description${i}`],
      }
    ));
}

export default function AboutUs({ t }) {
  return (
    <div css={styles.container}>
      <Title value={t.about_us_title} />
      <BossVideo />
      <GridList
        limit={2}
        items={members(t)}
        render={(item) => (
          <MemberBox member={item} />
        )}
        renderMore={() => (
          <Text value="More about" />
        )}
      />
    </div>
  );
}
