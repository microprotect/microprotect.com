export const mq = (width) => `@media (min-width: ${width}px)`;

export const imageReplacement = (image) => ({
  background: `transparent url(${image}) 0 0 no-repeat`,
  backgroundSize: 'contain',
  overflow: 'hidden',
  textIndent: '-1000em',
});
