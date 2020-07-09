import styled from '@emotion/styled';

import Container from './Container';

import { HEADER_HEIGHT } from '../../styles/constants-v6';

const Content = styled(Container)({
  flex: 1,
  paddingTop: HEADER_HEIGHT,
});

export default Content;
