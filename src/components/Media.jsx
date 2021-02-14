import styled from '@emotion/styled';

import {
  breakpoints, fontWeights, styles,
} from '../designSystem';

const Headline = styled.h2({
  fontSize: '28px',
  fontWeight: fontWeights.bold,
  margin: '100px 20px 30px',
  [breakpoints.minDesktop]: {
    margin: '130px 15px 30px',
  },
});

const MediaSection = styled.section({
  margin: '80px 0',
  padding: '0 20px',
  '& h2': {
    ...styles.screenReaderOnly,
  },
  [breakpoints.minDesktop]: {
    marginTop: '130px',
    padding: 0,
  },
});

const MediaWrapper = styled.div({
  position: 'relative',
  height: 0,
  paddingTop: '56.25%',
});

const MediaPlayer = styled.iframe({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  border: 0,
});

export default function Media() {
  return (
    <MediaSection>
      <Headline>Media</Headline>
      <MediaWrapper>
        <MediaPlayer width="560" height="315" src="https://www.youtube.com/embed/oyxm5roGj6g" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
      </MediaWrapper>
    </MediaSection>
  );
}
