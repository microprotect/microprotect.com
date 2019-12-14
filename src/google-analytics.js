gtag('event', 'visit');

document.querySelector('.subscribe form').addEventListener('submit', () => {
    gtag('event', 'subscribe');
});

(() => {
  const handleScroll = () => {
    if (window.scrollY < window.innerHeight / 2) {
      return;
    }

    gtag('event', 'scroll');
    window.removeEventListener('scroll', handleScroll);
  };

  window.addEventListener('scroll', handleScroll);
})();
