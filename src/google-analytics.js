/* global gtag */

const GA_MEASUREMENT_ID = 'UA-153178350-1';

const EVENTS = [
  'open-menu', 'play-video', 'subscribe', 'open-give-asia',
];

(() => {
  const { location } = window;

  if (location.hostname !== 'microprotect.com') {
    return;
  }

  gtag('config', 'UA-153178350-1');
  gtag('event', 'visit');

  const handleScroll = () => {
    if (window.scrollY < window.innerHeight / 2) {
      return;
    }

    gtag('event', 'scroll');
    window.removeEventListener('scroll', handleScroll);
  };

  window.addEventListener('scroll', handleScroll);

  window.addEventListener('message', ({ data: { type, path } }) => {
    if (EVENTS.includes(type)) {
      gtag('event', type);
    }

    if (type === 'pageview') {
      gtag('config', GA_MEASUREMENT_ID, { page_path: path });
    }
  });
})();
