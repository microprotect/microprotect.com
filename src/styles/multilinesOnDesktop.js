import { css } from '@emotion/core';

import { BASE_MQ } from './constants-v5';

export default css`
  & br {
    display: inline;
    content: "";
    &:after {
      content: " ";
    }
    ${BASE_MQ} {
      display: block;
      &:after {
        content: "";
      }
    }
  }
`;
