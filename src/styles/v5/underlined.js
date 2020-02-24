import { css } from '@emotion/core';

const underlined = (backgroundColor) => css`
  &:after {
    display: block;
    margin-top: -.7em;
    height: .7em;
    background: ${backgroundColor};
    content: "";
  }
`;

export default underlined;
