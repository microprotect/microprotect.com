/* global Kakao */

(() => {
  window.addEventListener('message', ({ data: { type } }) => {
    if (type === 'kakaotalk-chat') {
      Kakao.init('9fe7a8f4f11cef0577151a02e64d867a');
      Kakao.Channel.chat({
        channelPublicId: '_MIvxjxb',
      });
      window.open('https://accounts.kakao.com/login?continue=http%3A%2F%2Fpf.kakao.com%2F_MIvxjxb%2Fchat', '_blank');
    }

    if (type === 'myfriend-chat') {
      window.open('http://pf.kakao.com/_FkTJxb/chat', '_blank');
      window.open('https://accounts.kakao.com/login?continue=http%3A%2F%2Fpf.kakao.com%2F_FkTJxb%2Fchat', '_blank');
    }
  });
})();
