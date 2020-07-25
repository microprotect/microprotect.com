import React from 'react';

import Text from './Text';

function key(text, index) {
  return `${text}-${index}`;
}

export default function StrongText({ value }) {
  return (
    <>
      {(value || '').split('*')
        .map((text, index) => {
          const Tag = ['span', 'b'][index % 2];
          return text && (
            <Tag key={key(text, index)}>
              <Text value={text} />
            </Tag>
          );
        })}
    </>
  );
}
