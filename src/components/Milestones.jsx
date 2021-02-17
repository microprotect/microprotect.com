import styled from '@emotion/styled';

import {
  breakpoints, fontWeights, colors, flex, styles,
} from '../designSystem';

import { calculateRem } from '../utils';

const Headline = styled.h2({
  fontSize: `${calculateRem(28)}`,
  fontWeight: fontWeights.bold,
  margin: '100px 20px 30px',
  [breakpoints.minDesktop]: {
    margin: '130px 15px 30px 0',
  },
});

const MilestonesSection = styled.section();

const Timeline = styled.ul({
  listStyle: 'none',
  '& p': {
    fontSize: `${calculateRem(18)}`,
    fontWeight: fontWeights.regular,
    position: 'relative',
    lineHeight: 1.7,
    [breakpoints.maxTablet]: {
      marginTop: '-5px',
      '&::after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: '5px',
        left: '-17px',
        width: '10px',
        height: '10px',
        borderRadius: '100%',
        backgroundColor: colors.primary,
      },
    },
    [breakpoints.minDesktop]: {
      marginTop: '15px',
    },
  },
  '& span': {
    display: 'block',
  },
  [breakpoints.minDesktop]: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: 0,
  },
});

const TimelineItem = styled.li({
  [breakpoints.maxTablet]: {
    display: 'flex',
    flexWrap: 'wrap',
    '&:first-of-type > div': {
      marginBottom: '80px',
    },
    '&:last-of-type > div > div:last-of-type': {
      marginBottom: 0,
    },
  },
  [breakpoints.minDesktop]: {
    flex: flex.col,
    paddingTop: '20px',
    borderTop: `1px solid ${colors.primary}`,
  },
});

const TimelineMonth = styled.time({
  fontSize: `${calculateRem(14)}`,
  fontWeight: fontWeights.light,
  display: 'flex',
  justifyContent: 'flex-end',
  width: '95px',
  paddingRight: '12px',
  borderRight: `1px solid ${colors.primary}`,
  color: colors.primary,
  [breakpoints.minDesktop]: {
    ...styles.screenReaderOnly,
  },
});

const TimelineYearDetail = styled.div({
  paddingBottom: '20px',
  [breakpoints.maxTablet]: {
    paddingBottom: 0,
    paddingLeft: '12px',
  },
  [breakpoints.minDesktop]: {
    display: 'flex',
  },
});

const TimelineDayDetail = styled.div({
  marginBottom: '20px',
  [breakpoints.minDesktop]: {
    flex: flex.col,
    padding: '0 20px',
    marginBottom: 0,
    position: 'relative',
    '&::after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: '-25px',
      left: '20px',
      width: '10px',
      height: '10px',
      borderRadius: '100%',
      backgroundColor: colors.primary,
    },
  },
});

const TimelineDay = styled.time({
  fontSize: `${calculateRem(20)}`,
  fontWeight: fontWeights.thin,
  color: colors.primary,
  [breakpoints.maxTablet]: {
    ...styles.screenReaderOnly,
  },
});

export default function Milestones() {
  return (
    <MilestonesSection>
      <Headline>신뢰성 있는 자산들</Headline>
      <Timeline>
        <TimelineItem>
          <TimelineMonth datetime="2020-07">
            2020.7
          </TimelineMonth>
          <TimelineYearDetail>
            <TimelineDayDetail>
              <TimelineDay datetime="2020-07-23">
                2020.07.23
              </TimelineDay>
              <p>
                <span>건강보험심사평가원</span>
                빅데이터 지원사업 선정
              </p>
            </TimelineDayDetail>
            <TimelineDayDetail>
              <TimelineDay datetime="2020-07-01">
                2020.07.01
              </TimelineDay>
              <p>
                페이스북 엑셀러레이터
              </p>
            </TimelineDayDetail>
          </TimelineYearDetail>
        </TimelineItem>
        <TimelineItem>
          <TimelineMonth datetime="2020-08">
            2020.8
          </TimelineMonth>
          <TimelineYearDetail>
            <TimelineDayDetail>
              <TimelineDay datetime="2020-08-18">
                2020.08.18
              </TimelineDay>
              <p>
                <span>한국신용정보원</span>
                빅데이터 지원사업 선정
              </p>
            </TimelineDayDetail>
            <TimelineDayDetail>
              <TimelineDay datetime="2020-08-01">
                2020.08.01
              </TimelineDay>
              <p>
                <span>TIPS</span>
                (창업성장기술개발사업 과제)
              </p>
            </TimelineDayDetail>
          </TimelineYearDetail>
        </TimelineItem>
      </Timeline>
    </MilestonesSection>
  );
}
