import styled from '@emotion/styled';

import {
  breakpoints, fontWeights, colors, flex,
} from '../designSystem';

import { images } from '../assets';

import { calculateRem } from '../utils';

const Headline = styled.h2({
  fontSize: `${calculateRem(28)}`,
  fontWeight: fontWeights.bold,
  margin: '100px 20px 30px',
  [breakpoints.minDesktop]: {
    margin: '130px 15px 30px 0',
  },
});

const TeamSection = styled.section();

const TeamMember = styled.ul({
  borderBottom: `1px solid ${colors.secondary}`,
  '& li': {
    display: 'flex',
    borderTop: `1px solid ${colors.secondary}`,
    paddingLeft: '30px',
    position: 'relative',
    '&::before': {
      display: 'block',
      position: 'absolute',
      content: '""',
      [breakpoints.maxTablet]: {
        top: '5px',
        right: '7px',
        width: '105px',
        height: '121px',
      },
      [breakpoints.minDesktop]: {
        transform: 'translate(0, -50%)',
        top: '50%',
        left: '10px',
        width: '60px',
        height: '70px',
      },
    },
  },
  '& cite': {
    fontSize: `${calculateRem(20)}`,
    fontWeight: fontWeights.bold,
    fontStyle: 'normal',
    marginBottom: '10px',
    color: colors.secondary,
  },
  '& p': {
    fontSize: `${calculateRem(18)}`,
    fontWeight: fontWeights.thin,
    lineHeight: 1.7,
  },
  '& i': {
    fontStyle: 'normal',
    color: colors.black,
    [breakpoints.minDesktop]: {
      color: colors.white,
    },
  },
  [breakpoints.maxTablet]: {
    '& li': {
      flexDirection: 'column',
      justifyContent: 'center',
      height: '190px',
    },
    '& span': {
      display: 'block',
    },
  },
  [breakpoints.minDesktop]: {
    margin: 0,
    '& li': {
      padding: '30px 20px 30px 80px',
    },
    '& cite': {
      marginBottom: 0,
      width: '155px',
    },
    '& p': {
      flex: flex.col,
    },
  },
});

const TeamMemberLion = styled.li({
  '&::before': {
    background: `url(${images.faces.lion}) no-repeat 50% 50%/contain`,
  },
});

const TeamMemberAshal = styled.li({
  '&::before': {
    background: `url(${images.faces.ashal}) no-repeat 50% 50%/contain`,
  },
});

const TeamMemberAlison = styled.li({
  '&::before': {
    background: `url(${images.faces.alison}) no-repeat 50% 50%/contain`,
  },
});

const HiringlLinkTo = styled.div({
  backgroundColor: colors.secondary,
  '& a': {
    fontSize: `${calculateRem(18)}`,
    fontWeight: fontWeights.bold,
    display: 'flex',
    height: '45px',
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'relative',
    paddingRight: '50px',
    textDecoration: 'none',
    color: colors.black,
    '&::after': {
      display: 'block',
      width: '12px',
      height: '24px',
      position: 'absolute',
      top: '50%',
      right: '20px',
      background: `url(${images.arrows.diagonalBlack}) no-repeat 50% 50%/contain`,
      transform: 'translate(0, -50%)',
      content: '""',
    },
  },
});

export default function Team() {
  return (
    <TeamSection>
      <Headline>Team</Headline>
      <TeamMember>
        <TeamMemberLion>
          <cite>#CEO Lion</cite>
          <p>
            미국보험계리사(ASA)
            <i>,</i>
            {' '}
            <span>
              보험업 경력 16년(상품개발 10년)
              <i>,</i>
            </span>
            {' '}
            삼성화재 등
          </p>
        </TeamMemberLion>
        <TeamMemberAshal>
          <cite>#CTO Ashal</cite>
          <p>
            유튜브 1만 구독자 코딩의 신
            <i>,</i>
            {' '}
            <span>
              소프트웨어 개발 현업 경력 21년
              <i>,</i>
            </span>
            {' '}
            배달의민족 등
          </p>
        </TeamMemberAshal>
        <TeamMemberAlison>
          <cite>#CPO Alison</cite>
          <p>
            홍익대학교 산업디자인과
            <i>,</i>
            {' '}
            <span>
              전 뱅크샐러드 CPO
              <i>,</i>
            </span>
            {' '}
            탈잉 제품기획 VOD강의 튜터
          </p>
        </TeamMemberAlison>
        <HiringlLinkTo>
          <a
            href="https://www.rocketpunch.com/companies/microprotect/jobs"
            target="_blank"
            rel="nofollow noreferrer"
          >
            We are hiring
          </a>
        </HiringlLinkTo>
      </TeamMember>
    </TeamSection>
  );
}
