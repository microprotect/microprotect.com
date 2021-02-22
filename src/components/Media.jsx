import { useState } from 'react';

import styled from '@emotion/styled';

import { images } from '../assets';

import {
  breakpoints, fontWeights, styles,
} from '../designSystem';

import { calculateRem } from '../utils';

const { buttons, thumbnails } = images.videos;

const Headline = styled.h2({
  fontSize: `${calculateRem(28)}`,
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

const Wrapper = styled.div({
  paddingTop: '56.25%',
  position: 'relative',
  height: 0,
});

const Background = styled.img({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const Player = styled.iframe({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  border: 0,
});

const PlayButton = styled.button({
  width: '100%',
  height: '100%',
  background: `url(${buttons.normal}) no-repeat 50% 50%/16.25% 30.70%`,
  position: 'absolute',
  zIndex: 777,
  top: 0,
  left: 0,
  border: 0,
  '&:hover': {
    backgroundImage: `url(${buttons.hover})`,
  },
  '& span': {
    ...styles.screenReaderOnly,
  },
});

export default function Media() {
  const [playing, setPlaying] = useState(false);

  const handleClick = () => {
    setPlaying(true);
  };

  return (
    <MediaSection>
      <Headline>Media</Headline>
      <Wrapper>
        {playing ? (
          <Player
            src="https://www.youtube.com/embed/oyxm5roGj6g/?autoplay=1"
            frameBorder="0"
            allow="allowfullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <>
            <Background
              src={thumbnails.kb}
              alt=""
            />
            <PlayButton
              type="button"
              onClick={handleClick}
            >
              <span>영상 재생</span>
            </PlayButton>
          </>
        )}
      </Wrapper>
    </MediaSection>
  );
}
