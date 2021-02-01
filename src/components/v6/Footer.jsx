import React from 'react';

import styled from '@emotion/styled';

import Container from './Container';

const Wrapper = styled.footer({
  padding: '5em 0',
  background: '#292930',
  color: '#FFF',
  '& p': {
    margin: '.5em 0',
  },
});

export default function Footer() {
  return (
    <Wrapper>
      <Container>
        <p>
          (주)마이크로프로텍트
        </p>
        <p>
          서울특별시 영등포구 의사당대로 83, 오투타워(서울핀테크랩) 4층 112호
          {' '}
          (우편번호: 07323)
        </p>
        <p>
          대표: 권상민
        </p>
        <p>
          사업자등록번호: 146-86-01731
        </p>
        <p>
          Email:
          {' '}
          <a href="mailto:hello@microprotect.com">
            hello@microprotect.com
          </a>
        </p>
        <p>
          대표번호: 02-6925-7074
        </p>
        <p>
          Microprotect ⓒ 2020 All Right Reserved.
        </p>
      </Container>
    </Wrapper>
  );
}
