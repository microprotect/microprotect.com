import React from 'react';

import styled from '@emotion/styled';

import Header from '../components/v6/Header';
import Content from '../components/v6/Content';
import Footer from '../components/v6/Footer';

import '../assets/css/layout.css';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});

export default function DefaultLayout({ children }) {
  return (
    <Container>
      <Header />
      <Content>
        {children}
      </Content>
      <Footer />
    </Container>
  );
}
