(() => {
  window.addEventListener('message', ({ data: { type } }) => {
    if (['open-give-asia'].includes(type)) {
      window.open('https://microprotect.give.asia/', '_blank');
    }
  });
})();
