import styled from '@emotion/styled';

import { mq, styles } from '../../designSystem';

const Container = styled.div({
  ...styles.center,
  fontSize: '5vw',
  [mq.desktop]: {
    fontSize: '16px',
  },
});

export default function DefaultLayout({ children }) {
  return (
    <Container>
      {children}
    </Container>
  );
}
