import React from 'react';
import { useDispatch } from 'react-redux';

import { setLocale } from '../appSlice';

function LocaleLink({ children, locale }) {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(setLocale(locale));
  };

  return (
    <a
      href={`?locale=${locale}`}
      className={`locale-${locale}`}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}

export default function Header({ locale }) {
  return (
    <header className={`locale-${locale}`}>
      <div className="logo">microprotect</div>
      <ul className="languages">
        <li><LocaleLink locale="ko">Kr</LocaleLink></li>
        <li><LocaleLink locale="en">En</LocaleLink></li>
      </ul>
    </header>
  );
}
