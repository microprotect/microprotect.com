import React from 'react';

function key(text, index) {
  return `${text}-${index}`;
}

export default function Text({ value }) {
  return (
    <>
      {(value || '').split('\n')
        .map((i, index) => (
          <span key={key(i, index)}>
            {index > 0 && <br />}
            {i}
          </span>
        ))}
    </>
  );
}
