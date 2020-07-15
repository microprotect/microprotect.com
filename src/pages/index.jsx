import React from 'react';

import { Helmet } from 'react-helmet';

import Layout from '../layouts/HomeLayout';

import HeaderPanel from '../components/v6/home/HeaderPanel';

export default function IndexPage() {
  return (
    <Layout>
      <Helmet>
        <title>Microprotect</title>
      </Helmet>
      <HeaderPanel />
    </Layout>
  );
}
