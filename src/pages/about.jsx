import React from 'react';

import { Link } from 'gatsby';

import Layout from '../layouts/DefaultLayout';

export default function AboutPage() {
  return (
    <Layout>
      <h1>About</h1>
      <Link to="/">Home</Link>
    </Layout>
  );
}
