import React from 'react';

import { Helmet } from 'react-helmet';

import styled from '@emotion/styled';

import Layout from '../layouts/DefaultLayout';

import { images } from '../assets';

const Main = styled.main({
  paddingBottom: '6em',
});

const Link = styled.a({
  display: 'block',
});

const Image = styled.img({
  width: '100%',
});

export default function GermanyPage() {
  return (
    <Layout>
      <Helmet>
        <title>Microprotect 독일꿀보험</title>
      </Helmet>
      <Main>
        <Link href="https://microprotect.de/">
          <Image
            src={images.germany.hailey}
            alt=""
          />
        </Link>
      </Main>
    </Layout>
  );
}
