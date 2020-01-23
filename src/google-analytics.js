/* global gtag */

(() => {
  const { location } = window;

  if (location.hostname !== 'microprotect.com') {
    return;
  }

  gtag('event', 'visit');

  const handleScroll = () => {
    if (window.scrollY < window.innerHeight / 2) {
      return;
    }

    gtag('event', 'scroll');
    window.removeEventListener('scroll', handleScroll);
  };

  window.addEventListener('scroll', handleScroll);

  window.addEventListener('message', ({ data: { type } }) => {
    if (['play-video', 'subscribe', 'open-give-asia'].includes(type)) {
      gtag('event', type);
    }
  });
})();
