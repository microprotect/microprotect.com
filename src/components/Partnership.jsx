import styled from '@emotion/styled';

import {
  breakpoints, fontWeights, colors, styles,
} from '../designSystem';

import Partner from './Partner';

import partners from '../data/partners';

import { calculateRem } from '../utils';

const Headline = styled.h2({
  fontSize: `${calculateRem(28)}`,
  fontWeight: fontWeights.bold,
  margin: '100px 20px 30px',
  [breakpoints.minDesktop]: {
    margin: '130px 15px 30px 0',
  },
});

const PartnershipSection = styled.section();

const Partners = styled.div({
  borderBottom: `1px solid ${colors.secondary}`,
  '& > div': {
    borderTop: `1px solid ${colors.secondary}`,
    position: 'relative',
    overflow: 'hidden',
    [breakpoints.minDesktop]: {
      display: 'flex',
      alignItems: 'center',
      height: '85px',
    },
    '& button': {
      display: 'block',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 1,
      border: 0,
      width: '100%',
      height: '85px',
      backgroundColor: 'transparent',
      '&::after': {
        width: '15px',
        height: '7px',
        position: 'absolute',
        top: '50%',
        right: '20px',
        transform: 'translate(0, -50%)',
        content: '""',
      },
      [breakpoints.minDesktop]: {
        display: 'none',
      },
      '& span': {
        ...styles.screenReaderOnly,
      },
    },
    '& strong': {
      fontSize: `${calculateRem(20)}`,
      fontWeight: fontWeights.bold,
      display: 'flex',
      alignItems: 'center',
      height: '85px',
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
    '& p': {
      fontSize: `${calculateRem(18)}`,
      lineHeight: 2,
      [breakpoints.maxTablet]: {
        borderTop: `1px solid ${colors.secondary}`,
        margin: 0,
        padding: '18px 20px',
      },
    },
    '& span': {
      display: 'block',
    },
  },
  [breakpoints.minTablet]: {
    margin: 0,
  },
});

export default function Partnership() {
  return (
    <PartnershipSection>
      <Headline>Partnership</Headline>
      <Partners>
        {partners.map((partner) => (
          <Partner
            key={partner.name}
            partner={partner}
          />
        ))}
      </Partners>
    </PartnershipSection>
  );
}
