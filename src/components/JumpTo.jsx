import styled from '@emotion/styled';

import {
  breakpoints, fontWeights, colors, flex,
} from '../designSystem';

import { images } from '../assets';

import { calculateRem } from '../utils';

const JumpToSection = styled.section({
  marginTop: '80px',
  [breakpoints.minDesktop]: {
    display: 'flex',
    margin: '0 -15px',
  },
});

const Figure = styled.figure({
  marginTop: '60px',
  [breakpoints.minDesktop]: {
    flex: flex.col,
    marginTop: '135px',
    padding: '0 20px',
  },
  '& a': {
    display: 'block',
    position: 'relative',
    textDecoration: 'none',
    '&::before': {
      fontSize: `${calculateRem(28)}`,
      fontWeight: fontWeights.bold,
      content: '"R3TURNS"',
      position: 'absolute',
      top: '40px',
      left: '20px',
    },
    '&:focus, &:hover': {
      '& strong::before': {
        display: 'block',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: colors.black,
        opacity: '.3',
        content: '""',
      },
    },
  },
  '& img': {
    display: 'block',
    width: '100%',
    height: '310px',
    objectFit: 'cover',
    [breakpoints.minDesktop]: {
      height: 'auto',
    },
  },
  '& figcaption': {
    fontSize: `${calculateRem(18)}`,
    fontWeight: fontWeights.light,
    width: '320px',
    position: 'absolute',
    bottom: '100px',
    left: '20px',
    color: colors.primary,
    lineHeight: '1.7',
    '& span': {
      display: 'inline-block',
      padding: '3px 9px',
      backgroundColor: colors.black,
      whiteSpace: 'nowrap',
      '&:nth-of-type(2)': {
        paddingTop: '1px',
        paddingBottom: '1px',
      },
    },
  },
  '& strong': {
    fontSize: `${calculateRem(20)}`,
    fontWeight: fontWeights.bold,
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    height: '80px',
    padding: '0 30px',
    backgroundColor: colors.primary,
    color: colors.black,
    '& span': {
      position: 'relative',
      width: '100%',
      '&::after': {
        display: 'block',
        width: '20px',
        height: '20px',
        position: 'absolute',
        top: '50%',
        right: 0,
        transform: 'translate(0, -50%)',
        background: `url(${images.arrows.diagonalBlack}) no-repeat 50% 50%/contain`,
        content: '""',
      },
    },
  },
  '&:nth-of-type(2)': {
    '& a::before': {
      content: '"Germany"',
    },
    '& figcaption': {
      color: colors.secondary,
    },
    '& strong': {
      backgroundColor: colors.secondary,
    },
  },
});

export default function JumpTo() {
  return (
    <JumpToSection>
      <Figure>
        <a
          href="https://r3turns.com/"
          target="_blank"
          rel="nofollow noreferrer"
        >
          <img
            src={images.thumbnails.r3turns}
            alt="R3TURNS"
          />
          <figcaption>
            <span>지금까지 귀찮아서 신청 못한</span>
            <span>실손의료비 보험금 청구</span>
            <span>집에서 편안하게 모바일로 신청만 하세요</span>
          </figcaption>
          <strong>
            <span>보험금 찾으러가기</span>
          </strong>
        </a>
      </Figure>
      <Figure>
        <a
          href="https://microprotect.de/"
          target="_blank"
          rel="nofollow noreferrer"
        >
          <img
            src={images.thumbnails.germany}
            alt="Germany"
          />
          <figcaption>
            <span>독일 5만명, 유럽 52만명의</span>
            <span>한인 교포를 위한</span>
            <span>보험서비스를 제공합니다</span>
          </figcaption>
          <strong>
            <span>마이크로프로텍트 독일 바로가기</span>
          </strong>
        </a>
      </Figure>
    </JumpToSection>
  );
}
