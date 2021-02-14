import styled from '@emotion/styled';

import {
  breakpoints, fontWeights, colors,
} from '../designSystem';

import { images } from '../assets';

const Headline = styled.h2({
  fontSize: '28px',
  fontWeight: fontWeights.bold,
  margin: '100px 20px 30px',
  [breakpoints.minDesktop]: {
    margin: '130px 15px 30px',
  },
});

const PartnershipSection = styled.section();

const Partners = styled.div({
  borderBottom: `1px solid ${colors.secondary}`,
  '& > div': {
    display: 'flex',
    height: '85px',
    alignItems: 'center',
    borderTop: `1px solid ${colors.secondary}`,
    position: 'relative',
    overflow: 'hidden',
    '& strong': {
      fontSize: '20px',
      fontWeight: fontWeights.bold,
      display: 'flex',
      paddingLeft: '20px',
      color: colors.secondary,
      whiteSpace: 'nowrap',
      '&::after': {
        display: 'block',
        height: '85px',
        position: 'absolute',
        top: 0,
        content: '""',
      },
    },
    '& em': {
      fontSize: '20px',
      fontStyle: 'normal',
      fontWeight: fontWeights.light,
      position: 'absolute',
      [breakpoints.minDesktop]: {
        display: 'none',
      },
    },
    '& p': {
      lineHeight: 2,
      [breakpoints.maxTablet]: {
        display: 'none',
      },
    },
    '& span': {
      display: 'block',
    },
  },
  [breakpoints.minDesktop]: {
    margin: '0 15px',
  },
});

const PartnerCarvi = styled.div({
  '& strong::after': {
    width: '230px',
    left: '85px',
    background: `url(${images.partners.carvi}) no-repeat 50% 50%/contain`,
  },
  '& em': {
    left: '330px',
  },
  '& p': {
    marginLeft: '280px',
  },
});

const PartnerCashnote = styled.div({
  '& strong::after': {
    width: '220px',
    left: '125px',
    background: `url(${images.partners.cashnote}) no-repeat 50% 50%/contain`,
  },
  '& em': {
    left: '360px',
  },
  '& p': {
    marginLeft: '270px',
  },
});

const PartnerFacebook = styled.div({
  '& strong::after': {
    width: '150px',
    left: '125px',
    background: `url(${images.partners.facebook}) no-repeat 50% 50%/contain`,
  },
  '& em': {
    left: '295px',
  },
  '& p': {
    marginLeft: '200px',
  },
});

const PartnerMediage = styled.div({
  '& strong::after': {
    width: '123px',
    left: '140px',
    background: `url(${images.partners.mediage}) no-repeat 50% 50%/contain`,
  },
  '& em': {
    left: '280px',
  },
  '& p': {
    marginLeft: '170px',
  },
});

export default function JumpTo() {
  return (
    <PartnershipSection>
      <Headline>Partnership</Headline>
      <Partners>
        <PartnerFacebook>
          <strong>
            #페이스북
          </strong>
          <em>facebook</em>
          <p>
            <span>왓츠앱, 페이스북 메신저를 기반으로 한 챗봇 전용 보험 상품 서비스 제공</span>
            인도의 4억명 이상 왓츠앱 유저를 위한 전용상품 개발
          </p>
        </PartnerFacebook>
        <PartnerCashnote>
          <strong>
            #캐시노트
          </strong>
          <em>cashnote</em>
          <p>
            <span>70만명의 자영업자를 위한 자동차보험부터 화재보험까지 모든 의무보험등을 제공</span>
            폐업보상보험, 매출하락보전보험 등의 자영업 데이터 기반 보험을 제공
          </p>
        </PartnerCashnote>
        <PartnerMediage>
          <strong>
            #메디에이지
          </strong>
          <em>mediage</em>
          <p>
            <span>360만명의 건강검진 분석 데이터를 기반으로 생체나이 분석 등 최적의 헬스케어서비스를 제공</span>
            건강검진분석, 보험보장분석, 보험상품추천까지 일괄적으로 고객 맞춤형 서비스를 제공
          </p>
        </PartnerMediage>
        <PartnerCarvi>
          <strong>
            #카비
          </strong>
          <em>carvi</em>
          <p>
            <span>비전기반 ADAS카메라를 자동차보험 가입자에게 무료로 제공해서 사고율을 혁신적으로 낮추는 서비스 제공</span>
            고객의 운전습관을 딥러닝으로 학습하여 완벽한 고객행동기반 자동차보험료 산출 서비스 제공
          </p>
        </PartnerCarvi>
      </Partners>
    </PartnershipSection>
  );
}
