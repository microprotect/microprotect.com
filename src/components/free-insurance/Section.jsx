import styled from '@emotion/styled';

import {
  BASE_MQ,
  CONTENT_PADDING,
} from '../../styles/constants-v4';

const Section = styled.section(({ _css }) => [
  {
    margin: '10vw 0',
    padding: '0 5%',
    [BASE_MQ]: {
      margin: '5em 0',
      padding: `0 ${CONTENT_PADDING}`,
    },
  },
  _css,
]);

export default Section;
