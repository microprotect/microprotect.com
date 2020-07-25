import styled from '@emotion/styled';

import { listItem } from '../styles/list';

const ListItem = styled.li(({ inline, _css }) => [
  {
    ...listItem,
    display: inline ? 'inline-block' : 'block',
  },
  _css,
]);

export default ListItem;
