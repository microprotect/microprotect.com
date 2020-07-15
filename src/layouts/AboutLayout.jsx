import React from 'react';

import { Helmet } from 'react-helmet';

import ReactMarkdown from 'react-markdown';

import styled from '@emotion/styled';

import Header from '../components/v6/Header';
import Footer from '../components/v6/Footer';
import Container from '../components/v6/Container';

import HeaderPanel from '../components/v6/about/HeaderPanel';
import Content from '../components/v6/about/Content';
import Sidebar from '../components/v6/about/Sidebar';

import '../assets/css/layout.css';

const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  background: '#040A1E',
});

const Body = styled.div({
  flex: 1,
});

const RelativeContainer = styled(Container)({
  position: 'relative',
});

export default function AboutLayout({ image, title, contents }) {
  return (
    <Wrapper>
      <Helmet>
        <title>
          Microprotect -
          {' '}
          {title}
        </title>
      </Helmet>
      <Header />
      <Body>
        <HeaderPanel image={image} title={title} />
        <RelativeContainer>
          <main>
            {contents.map((text) => (
              <Content key={text}>
                <ReactMarkdown source={text} />
              </Content>
            ))}
          </main>
          <Sidebar />
        </RelativeContainer>
      </Body>
      <Footer />
    </Wrapper>
  );
}
