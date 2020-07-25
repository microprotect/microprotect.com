import styled from '@emotion/styled';

import {
  BASE_MQ,
  CONTENT_PADDING,
} from '../styles/constants-v5';

const Section = styled.section(({ _css }) => [
  {
    padding: '10vw 5%',
    [BASE_MQ]: {
      margin: '0 auto',
      padding: `3em ${CONTENT_PADDING}`,
    },
  },
  _css,
]);

export default Section;
