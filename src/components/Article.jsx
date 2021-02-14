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

const ArticleSection = styled.section();

const Press = styled.ul({
  borderBottom: `1px solid ${colors.primary}`,
  listStyle: 'none',
  [breakpoints.minDesktop]: {
    margin: '0 15px',
  },
});

const PressItem = styled.li({
  borderTop: `1px solid ${colors.primary}`,
  '& a': {
    display: 'flex',
    textDecoration: 'none',
    position: 'relative',
    '&::after': {
      display: 'block',
      width: '15px',
      height: '15px',
      background: `url(${images.arrows.diagonalRed}) no-repeat 50% 50%/contain`,
      position: 'absolute',
      top: '20px',
      right: '20px',
      content: '""',
      [breakpoints.minDesktop]: {
        transform: 'translate(0, -50%)',
        top: '50%',
        right: '45px',
      },
    },
  },
  '& time': {
    fontSize: '14px',
    fontWeight: fontWeights.thin,
    marginBottom: '7px',
    color: colors.primary,
  },
  '& strong': {
    fontSize: '18px',
    fontWeight: fontWeights.thin,
    lineHeight: 1.5,
  },
  [breakpoints.maxTablet]: {
    '& a': {
      flexDirection: 'column',
      padding: '20px',
    },
  },
  [breakpoints.minDesktop]: {
    '& a': {
      padding: '30px 20px',
    },
    '& time': {
      fontSize: '20px',
      marginBottom: 0,
      width: '150px',
      lineHeight: 1.5,
    },
  },
});

export default function Summary() {
  return (
    <ArticleSection>
      <Headline>Article</Headline>
      <Press>
        <PressItem>
          <a
            href="https://biz.chosun.com/site/data/html_dir/2020/09/21/2020092100683.html"
            target="_blank"
            rel="nofollow noreferrer"
          >
            <time dateTime="2020-09-22">2020.09.22(화)</time>
            <strong>KB금융, &apos;KB스타터스&apos; 21개사 선정… ESG 분야 지원</strong>
          </a>
        </PressItem>
        <PressItem>
          <a
            href="http://news.bizwatch.co.kr/article/finance/2020/10/07/0001"
            target="_blank"
            rel="nofollow noreferrer"
          >
            <time dateTime="2020-10-07">2020.10.07(수)</time>
            <strong>[금융 첨병들]잘 나가던 보험사 직원이 사표 낸 까닭</strong>
          </a>
        </PressItem>
        <PressItem>
          <a
            href="https://www.itworld.co.kr/news/173764"
            target="_blank"
            rel="nofollow noreferrer"
          >
            <time dateTime="2020-11-27">2020.11.27(금)</time>
            <strong>페이스북, ‘페이스북 엑셀러레이터 서울’ 데모데이 개최</strong>
          </a>
        </PressItem>
      </Press>
    </ArticleSection>
  );
}
