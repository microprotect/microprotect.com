import { Helmet } from 'react-helmet';

import styled from '@emotion/styled';

import {
  breakpoints, fontWeights, colors,
} from '../designSystem';

import { images } from '../assets';

const SummarySection = styled.section({
  padding: '0 20px',
  marginTop: '35px',
  [breakpoints.minDesktop]: {
    padding: '0',
  },
});

const Brand = styled.h1({
  fontSize: '24px',
  fontFamily: 'Circular Air Bold',
  color: colors.primary,
  textTransform: 'lowercase',
});

const Slogan = styled.p({
  fontSize: '40px',
  fontFamily: 'Henri Didot',
  position: 'absolute',
  top: '120px',
  left: '20px',
  maxWidth: '330px',
  color: colors.primary,
  lineHeight: 1,
  [breakpoints.minDesktop]: {
    fontSize: '100px',
    maxWidth: '970px',
    left: 0,
    lineHeight: 1.1,
  },
});

const SloganBackground = styled.div({
  background: `url(${images.backgrounds.slogan}) no-repeat 50% 50%/583px 458px`,
  margin: '0 -20px',
  height: '825px',
  [breakpoints.minDesktop]: {
    backgroundPosition: 'calc(100% - 90px) 100%',
    backgroundSize: '847px 666px',
    margin: '0',
    height: '760px',
  },
});

const Vision = styled.p({
  fontFamily: 'Orator Std',
  color: colors.secondary,
  [breakpoints.maxTablet]: {
    fontSize: '22px',
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
      bottom: '0',
      left: '50%',
      transform: 'translate(-50%, 0)',
      background: `url(${images.arrows.flow}) no-repeat 50% 50%/contain`,
      content: '""',
    },
  },
  [breakpoints.minDesktop]: {
    fontSize: '32px',
    paddingBottom: '20px',
  },
});

const Mission = styled.p({
  fontSize: '20px',
  fontWeight: fontWeights.thin,
  lineHeight: '1.5',
  textAlign: 'center',
  '& strong': {
    fontWeight: fontWeights.bold,
  },
  [breakpoints.minDesktop]: {
    fontSize: '24px',
    textAlign: 'left',
    '& span': {
      display: 'block',
    },
  },
});

export default function Summary() {
  return (
    <SummarySection>
      <Helmet>
        <title>Microprotect</title>
      </Helmet>
      <Brand>
        Microprotect
      </Brand>
      <Slogan>
        Our experience insight and creativity to provide better insurance services for all
      </Slogan>
      <SloganBackground />
      <Vision>
        secure more people equarlly
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
