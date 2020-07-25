import React from 'react';

import styled from '@emotion/styled';

import Box from '../../components/Box';
import Title from '../../components/Title';
import Text from '../../components/Text';

const Container = styled(Box)({
  lineHeight: '140%',
});

export default function MemberBox({ member }) {
  const { position, name, description } = member;

  return (
    <Container>
      <Title heavy level={3} value={`${position} [*] ${name}`} />
      <Text value={description} />
    </Container>
  );
}
