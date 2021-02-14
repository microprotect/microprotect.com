import styled from '@emotion/styled';

import Summary from '../components/Summary';
import JumpTo from '../components/JumpTo';
import Partnership from '../components/Partnership';
import Milestones from '../components/Milestones';
import Team from '../components/Team';
import Article from '../components/Article';
import Media from '../components/Media';
import Footer from '../components/Footer';

import Layout from '../components/layouts/DefaultLayout';

const Container = styled.div({
  maxWidth: '1230px',
  margin: '0 auto',
  position: 'relative',
});

export default function IndexPage() {
  return (
    <Layout>
      <Container>
        <Summary />
        <JumpTo />
        <Partnership />
        <Milestones />
        <Team />
        <Article />
        <Media />
      </Container>
      <Footer />
    </Layout>
  );
}
