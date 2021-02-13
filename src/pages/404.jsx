import { Helmet } from 'react-helmet';

import Layout from '../components/layouts/DefaultLayout';

export default function NotFoundPage() {
  return (
    <Layout>
      <Helmet>
        <title>Not Found | Microprotect</title>
      </Helmet>
      <h1>
        404 Not Found
      </h1>
    </Layout>
  );
}
