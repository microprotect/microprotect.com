export const mq = (width) => `@media (min-width: ${width}px)`;

export const imageReplacement = (image) => ({
  background: `transparent url(${image}) 50% 50% no-repeat`,
  backgroundSize: 'contain',
  overflow: 'hidden',
  textIndent: -10000,
});
