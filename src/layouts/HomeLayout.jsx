import React from 'react';

import styled from '@emotion/styled';

import Header from '../components/v6/Header';
import Footer from '../components/v6/Footer';

import '../assets/css/layout.css';

const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});

const Content = styled.div({
  flex: 1,
});

export default function HomeLayout({ children }) {
  return (
    <Wrapper>
      <Header full />
      <Content>
        {children}
      </Content>
      <Footer />
    </Wrapper>
  );
}
