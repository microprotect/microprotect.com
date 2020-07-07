/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import _ from 'lodash';

import Section from '../../components/Section';
import Text from '../../components/Text';
import GridList from '../../components/GridList';
import Title from '../../components/free-insurance/Title';

import MemberBox from './MemberBox';

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
      <GridList
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
