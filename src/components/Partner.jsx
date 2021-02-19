import { useState } from 'react';

import _ from 'lodash';

import styled from '@emotion/styled';

import { breakpoints } from '../designSystem';

import { images } from '../assets';

const arrows = {
  [false]: images.arrows.toggleClosed,
  [true]: images.arrows.toggleOpened,
};

const Wrapper = styled.div(({
  image, position, indent, active,
}) => ({
  '& strong::after': {
    ...position,
    background: 'no-repeat 50% 50%/contain',
    backgroundImage: `url(${image})`,
  },
  '& button::after': {
    background: 'no-repeat 50% 50%/contain',
    backgroundImage: `url(${arrows[active]})`,
  },
  '& p': {
    [breakpoints.minDesktop]: {
      marginLeft: indent,
    },
    [breakpoints.maxTablet]: {
      display: active ? 'block' : 'none',
    },
  },
}));

export default function Partner({ partner }) {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  const {
    name, title, descriptions, position, indent,
  } = partner;

  return (
    <Wrapper
      image={images.partners[name]}
      position={position}
      indent={indent}
      active={active}
    >
      <button
        onClick={handleClick}
        name={name}
        type="button"
      >
        <span>
          {active ? '상세내용 열기' : '상세내용 닫기'}
        </span>
      </button>
      <strong>
        {title}
      </strong>
      <p>
        {descriptions.map((description, index) => (
          <span key={_.identity(index)}>
            {description}
          </span>
        ))}
      </p>
    </Wrapper>
  );
}
