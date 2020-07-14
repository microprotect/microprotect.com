import React from 'react';

import { Helmet } from 'react-helmet';

import ReactMarkdown from 'react-markdown';

import _ from 'lodash';

import styled from '@emotion/styled';

import Header from '../components/v6/Header';
import Footer from '../components/v6/Footer';
import Container from '../components/v6/Container';

import HeaderPanel from '../components/v6/projects/HeaderPanel';
import Content from '../components/v6/projects/Content';
import Sidebar from '../components/v6/projects/Sidebar';

import '../assets/css/layout.css';

const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});

const Body = styled.div({
  background: '#FFF',
  color: '#000',
  flex: 1,
});

const RelativeContainer = styled(Container)({
  position: 'relative',
});

export default function ProjectLayout({
  name, title, partner, contents,
}) {
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
        <HeaderPanel
          title={title}
          partner={partner}
          image={`projects.${_.camelCase(name)}`}
        />
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
