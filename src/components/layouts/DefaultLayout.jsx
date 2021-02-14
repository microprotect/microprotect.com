import styled from '@emotion/styled';

const Container = styled.div();

export default function DefaultLayout({ children }) {
  return (
    <Container>
      {children}
    </Container>
  );
}
