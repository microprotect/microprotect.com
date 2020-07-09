import React from 'react';

import { Link } from 'gatsby';

export default function IndexPage() {
  return (
    <div>
      <p>Welcome, world!</p>
      <Link to="/about">About</Link>
    </div>
  );
}
