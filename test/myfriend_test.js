Feature('MyFriend');

Scenario('User visits MyFriend page', (I) => {
  I.amOnPage('/myfriend');
  I.see('병원 무료통역 예약 서비스');
});
