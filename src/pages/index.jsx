import React from 'react';

import { Helmet } from 'react-helmet';

import Layout from '../layouts/HomeLayout';

import HeaderPanel from '../components/v6/home/HeaderPanel';
import Projects from '../components/v6/home/Projects';

export default function IndexPage() {
  return (
    <Layout>
      <Helmet>
        <title>Microprotect</title>
      </Helmet>
      <HeaderPanel />
      <Projects />
    </Layout>
  );
}
