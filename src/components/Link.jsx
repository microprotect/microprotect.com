/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

import { Link as RouterLink } from 'react-router-dom';

export default function Link(props) {
  const handleClick = (event) => {
    const { onClick } = props;
    if (onClick) {
      onClick(event);
    }
    window.scrollTo(0, 0);
  };

  const { children } = props;

  return (
    <RouterLink
      {...props}
      onClick={handleClick}
    >
      {children}
    </RouterLink>
  );
}
