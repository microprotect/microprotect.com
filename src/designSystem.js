export const sizes = {
  contentMaxWidth: '540px',
};

export const mq = {
  desktop: '@media screen and (min-width: 600px)',
};

export const colors = {
  black: '#000',
  white: '#FFF',
  primary: '#FF6527',
  highlight: '#00F87D',
  disable: '#888',
};

export const styles = {
  center: {
    padding: `0 calc((100vw - min(90vw, ${sizes.contentMaxWidth})) / 2)`,
  },
  screenReaderOnly: {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: 0,
    overflow: 'hidden',
    clip: 'rect(0,0,0,0)',
    whiteSpace: 'nowrap',
    WebkitClipPath: 'inset(50%)',
    clipPath: 'inset(50%)',
    border: 0,
  },
};
