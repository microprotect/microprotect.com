import { Helmet } from 'react-helmet';

import styled from '@emotion/styled';

import {
  breakpoints, fontWeights, colors,
} from '../designSystem';

import { images } from '../assets';

import { calculateRem } from '../utils';

const SummarySection = styled.section({
  padding: '0 20px',
  marginTop: '35px',
  [breakpoints.minDesktop]: {
    padding: 0,
  },
});

const Brand = styled.h1({
  fontSize: `${calculateRem(24)}`,
  fontFamily: 'Circular Air Bold',
  color: colors.primary,
  textTransform: 'lowercase',
});

const Slogan = styled.p({
  fontSize: '10.666vw',
  fontFamily: 'Henri Didot',
  position: 'absolute',
  top: '120px',
  left: '20px',
  maxWidth: '88%',
  color: colors.primary,
  lineHeight: 1,
  '&::before, &::after': {
    position: 'absolute',
    top: 0,
    left: 0,
    content: '"Our experience insight and creativity to provide better insurance services for all"',
  },
  [breakpoints.minTablet]: {
    fontSize: '8.166vw',
    maxWidth: '68%',
  },
  [breakpoints.minDesktop]: {
    fontSize: `${calculateRem(100)}`,
    maxWidth: '970px',
    left: 0,
    lineHeight: 1.1,
  },
});

const SloganBackground = styled.div({
  margin: '0 -20px',
  height: 'calc(100vw + 234px)',
  position: 'relative',
  '&::after': {
    display: 'block',
    position: 'absolute',
    bottom: 0,
    background: `url(${images.backgrounds.slogan}) no-repeat 50% 50%/contain`,
    content: '""',
  },
  [breakpoints.maxMobile]: {
    '&::after': {
      left: '50%',
      transform: 'translate(-50%, 0)',
      width: '583px',
      height: '458px',
    },
  },
  [breakpoints.minTablet]: {
    margin: 0,
    height: '829px',
    '&::after': {
      bottom: 0,
      right: '-90px',
      width: '847px',
      height: '666px',
    },
  },
});

const Vision = styled.p({
  marginTop: '55px',
  textTransform: 'lowercase',
  fontFamily: 'Orator Std',
  color: colors.secondary,
  [breakpoints.maxTablet]: {
    fontSize: `${calculateRem(22)}`,
    position: 'relative',
    paddingBottom: '100px',
    marginBottom: '40px',
    letterSpacing: '-.05em',
    textAlign: 'center',
    '&::after': {
      display: 'block',
      position: 'absolute',
      width: '12px',
      height: '60px',
      bottom: 0,
      left: '50%',
      transform: 'translate(-50%, 0)',
      background: `url(${images.arrows.flow}) no-repeat 50% 50%/contain`,
      content: '""',
    },
  },
  [breakpoints.minDesktop]: {
    marginTop: '10px',
    fontSize: '32px',
    paddingBottom: '20px',
  },
});

const Mission = styled.p({
  fontSize: `${calculateRem(20)}`,
  fontWeight: fontWeights.thin,
  lineHeight: '1.5',
  textAlign: 'center',
  '& strong': {
    fontWeight: fontWeights.bold,
  },
  [breakpoints.minTablet]: {
    '& span': {
      display: 'block',
    },
  },
  [breakpoints.minDesktop]: {
    fontSize: `${calculateRem(24)}`,
    textAlign: 'left',
  },
});

export default function Summary() {
  return (
    <SummarySection>
      <Helmet>
        <title>마이크로프로텍트 Microprotect</title>
      </Helmet>
      <Brand>
        Microprotect
      </Brand>
      <Slogan>
        Our experience insight and creativity to provide better insurance services for all
      </Slogan>
      <SloganBackground />
      <Vision>
        Secure more people equally
      </Vision>
      <Mission>
        <strong>마이크로프로텍트</strong>
        는
        {' '}
        <span>더 많은 사람들이</span>
        {' '}
        보험의 혜택을 받게 하는 것입니다
      </Mission>
    </SummarySection>
  );
}
