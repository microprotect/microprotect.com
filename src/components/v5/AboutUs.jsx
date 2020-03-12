/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import _ from 'lodash';

import Section from './Section';
import Title from '../v4/Title';
import Text from '../Text';
import BossVideo from '../BossVideo';
import GridList from '../v4/GridList';
import MemberBox from '../v4/MemberBox';

function members(t) {
  return _.range(13).map((i) => i + 1)
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
    <Section>
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
    </Section>
  );
}
