/* global givikiWidget */

(() => {
  window.addEventListener('message', ({ data: { type } }) => {
    if (['open-give-asia'].includes(type)) {
      givikiWidget.open();
    }
  });
})();
