import React from 'react';

import styled from '@emotion/styled';

import Container from './Container';

const Wrapper = styled.footer({
  padding: '1em 0',
  background: '#292930',
  color: '#FFF',
});

export default function Footer() {
  return (
    <Wrapper>
      <Container>
        <p>Microprotect</p>
        <p>Secure More People Equally</p>
        <p>hello@microprotect.com</p>
        <p>Microprotect ⓒ 2020 All Right Reserved.</p>
      </Container>
    </Wrapper>
  );
}
