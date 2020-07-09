import React from 'react';

import { Link } from 'gatsby';

import Layout from '../layouts/DefaultLayout';

export default function IndexPage() {
  return (
    <Layout>
      <h1>Welcome, world!</h1>
      <Link to="/about">About</Link>
    </Layout>
  );
}
