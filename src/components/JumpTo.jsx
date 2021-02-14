import styled from '@emotion/styled';

import {
  breakpoints, fontWeights, colors, flex,
} from '../designSystem';

import { images } from '../assets';

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
    padding: '0 20px',
  },
  '& a': {
    display: 'block',
    position: 'relative',
    textDecoration: 'none',
    '&::before': {
      fontSize: '28px',
      fontWeight: fontWeights.bold,
      content: '"R3TURNS"',
      position: 'absolute',
      top: '40px',
      left: '20px',
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
  '& span': {
    display: 'block',
  },
  '& figcaption': {
    fontSize: '18px',
    fontWeight: fontWeights.light,
    position: 'absolute',
    bottom: '100px',
    left: '20px',
    padding: '3px 7px',
    backgroundColor: colors.black,
    color: colors.primary,
    lineHeight: '1.7',
  },
  '& strong': {
    fontSize: '20px',
    fontWeight: fontWeights.bold,
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    height: '80px',
    paddingLeft: '30px',
    backgroundColor: colors.primary,
    color: colors.black,
    '&::after': {
      display: 'block',
      width: '20px',
      height: '20px',
      position: 'absolute',
      top: '50%',
      right: '30px',
      transform: 'translate(0, -50%)',
      background: `url(${images.arrows.diagonalBlack}) no-repeat 50% 50%/contain`,
      content: '""',
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
            지금까지 귀찮아서 신청 못한
            <span>실손의료비 보험금 청구</span>
            집에서 편안하게 모바일로 신청만 하세요
          </figcaption>
          <strong>보험금 찾으러가기</strong>
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
            독일 5만명, 유럽 52만명의
            <span>한인 교포를 위한</span>
            보험서비스를 제공합니다
          </figcaption>
          <strong>마이크로프로텍트 독일 바로가기</strong>
        </a>
      </Figure>
    </JumpToSection>
  );
}
