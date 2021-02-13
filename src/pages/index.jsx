import { useEffect } from 'react';

import { Helmet } from 'react-helmet';

import styled from '@emotion/styled';

import Layout from '../components/layouts/DefaultLayout';

import { colors } from '../designSystem';

const Brand = styled.div({
  fontFamily: 'Circular Air Bold',
  fontSize: '1em',
  padding: '1em 0',
  color: colors.primary,
  textTransform: 'lowercase',
});

const Slogan = styled.h1({
  fontFamily: 'Didot',
  fontSize: '2em',
  color: colors.primary,
});

export default function IndexPage() {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = 'https://microprotect.github.io/';
    }, 2000);
  });

  return (
    <Layout>
      <Helmet>
        <title>Microprotect</title>
      </Helmet>
      <Brand>
        Microprotect
      </Brand>
      <Slogan>
        Our experience
        insight and creativity
        to provide better
        insurance services
        for all
      </Slogan>
    </Layout>
  );
}
