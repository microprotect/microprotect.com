import styled from '@emotion/styled';

import {
  BASE_MQ,
  MAX_WIDTH,
  MOBILE_PADDING_HORIZONTAL,
} from '../../styles/constants-v6';

const Container = styled.div({
  margin: `0 ${MOBILE_PADDING_HORIZONTAL}`,
  [BASE_MQ]: {
    margin: '0 auto',
    width: '90%',
    maxWidth: MAX_WIDTH,
  },
});

export default Container;
