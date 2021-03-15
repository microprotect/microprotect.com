import styled from '@emotion/styled';

import {
  breakpoints, fontWeights, colors, styles,
} from '../designSystem';

import { calculateRem } from '../utils';

const FooterArea = styled.footer({
  padding: '50px 35px',
  position: 'relative',
  backgroundColor: colors.footerBackground,
  '& strong': {
    fontSize: `${calculateRem(20)}`,
    fontFamily: 'Circular Air Bold',
    display: 'block',
    paddingBottom: '15px',
    color: colors.white,
    textTransform: 'lowercase',
    [breakpoints.minDesktop]: {
      paddingBottom: '40px',
    },
  },
  '& dl': {
    display: 'flex',
    lineHeight: 2,
  },
  [breakpoints.minDesktop]: {
    marginTop: '220px',
    paddingRight: 0,
    paddingLeft: 0,
  },
});

const FooterContainer = styled.div({
  maxWidth: '1230px',
  margin: '0 auto',
});

const CompanyInfo = styled.ul({
  fontSize: `${calculateRem(16)}`,
  fontWeight: fontWeights.thin,
  listStyle: 'none',
  [breakpoints.minDesktop]: {
    '& li': {
      display: 'inline-flex',
      paddingRight: '25px',
    },
  },
});

const CompanyName = styled.dl({
  '& dt': {
    ...styles.screenReaderOnly,
  },
});

const CompanyPresident = styled.dl({
  '& dt': {
    paddingRight: '5px',
    '&::after': {
      content: '":"',
    },
  },
});

const LawInfo = styled.ul({
  fontSize: `${calculateRem(14)}`,
  fontWeight: fontWeights.thin,
  marginTop: '25px',
  listStyle: 'none',
  opacity: '.5',
  [breakpoints.minDesktop]: {
    marginTop: '7px',
    '& li': {
      display: 'inline-flex',
      paddingRight: '10px',
    },
  },
});

const BusinessNumber = styled.dl({
  '& dt': {
    paddingRight: '2px',
    '&::after': {
      content: '":"',
    },
  },
});

const ContactMail = styled.dl({
  '& dt': {
    paddingRight: '2px',
    '&::after': {
      content: '":"',
    },
  },
});

const Address = styled.dl({
  '& dt': {
    ...styles.screenReaderOnly,
  },
  '& address': {
    fontStyle: 'normal',
    letterSpacing: '-.05em',
  },
  [breakpoints.maxTablet]: {
    '& span': {
      display: 'block',
    },
  },
});

const Copyrights = styled.p({
  fontSize: `${calculateRem(14)}`,
  fontWeight: fontWeights.thin,
  marginTop: '3px',
  opacity: '.5',
});

export default function Footer() {
  return (
    <FooterArea>
      <FooterContainer>
        <strong>Microprotect</strong>
        <CompanyInfo>
          <li>
            <CompanyName>
              <dt>회사명</dt>
              <dd>(주)마이크로프로텍트</dd>
            </CompanyName>
          </li>
          <li>
            <CompanyPresident>
              <dt>대표자</dt>
              <dd>권상민</dd>
            </CompanyPresident>
          </li>
        </CompanyInfo>
        <LawInfo>
          <li>
            <BusinessNumber>
              <dt>사업자등록번호</dt>
              <dd>146-86-01731</dd>
            </BusinessNumber>
          </li>
          <li>
            <ContactMail>
              <dt>Email</dt>
              <dd>hello@microprotect.com</dd>
            </ContactMail>
          </li>
          <li>
            <Address>
              <dt>주소</dt>
              <dd>
                <address>
                  <span>서울특별시 영등포구 의사당대로 83,</span>
                  오투타워(서울핀테크랩) 4층 112호 (우편번호: 07323)
                </address>
              </dd>
            </Address>
          </li>
        </LawInfo>
        <Copyrights>Microprotect ⓒ 2021 All Rights Reserved.</Copyrights>
      </FooterContainer>
    </FooterArea>
  );
}
