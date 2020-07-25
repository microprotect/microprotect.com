import styled from '@emotion/styled';

import {
  BASE_MQ,
  white,
} from '../styles/constants-v5';

const Box = styled.div(({ _css }) => [
  {
    padding: '1em',
    background: white,
    boxShadow: '2px 2px 10px 0 rgba(200, 200, 200, 0.5)',
    [BASE_MQ]: {
      padding: '2em',
    },
  },
  _css,
]);

export default Box;
