import { mq } from './utils';

const contentPadding = 40;

export const MAX_WIDTH = 1024 + contentPadding * 2;

export const CONTENT_PADDING = `
  max(
    ${contentPadding}px,
    calc((100% - ${MAX_WIDTH}px) / 2 + ${contentPadding}px)
  )
`;

export const BASE_MQ = mq(1024);

export const backgroundColor = '#F8FBFF';
export const white = '#FFF';
export const black = '#202020';
export const yellow = '#F5C92A';
export const red = '#EC5556';
export const mint = '#47D3E8';
export const darkBlue = '#109DB2';
export const darkGray = '#434E51';
