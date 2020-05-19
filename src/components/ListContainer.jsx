import styled from '@emotion/styled';

import { listContainer } from '../styles/list';

const ListContainer = styled.ul(({ _css }) => [
  {
    ...listContainer,
  },
  _css,
]);

export default ListContainer;
