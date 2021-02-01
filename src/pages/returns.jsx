import React from 'react';

import { Helmet } from 'react-helmet';

import styled from '@emotion/styled';

import Layout from '../layouts/DefaultLayout';

import { images } from '../assets';

const Main = styled.main({
  paddingBottom: '6em',
});

const Image = styled.img({
  display: 'block',
  width: '100%',
});

export default function ReturnsPage() {
  return (
    <Layout>
      <Helmet>
        <title>Microprotect Returns</title>
      </Helmet>
      <Main>
        <Image src={images.logos.returns} alt="" />
      </Main>
    </Layout>
  );
}
