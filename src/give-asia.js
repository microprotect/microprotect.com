/* global givikiWidget */

(() => {
  window.addEventListener('message', ({ data: { type } }) => {
    if (['open-give-asia'].includes(type)) {
      givikiWidget.open();
      // NOTE: Widget has a problem.
      // https://github.com/microprotect/microprotect.com/pull/89
      window.open('https://microprotect.give.asia/', '_blank');
    }
  });
})();
