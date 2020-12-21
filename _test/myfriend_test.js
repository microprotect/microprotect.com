Feature('MyFriend');

Scenario('User visits MyFriend page', ({ I }) => {
  I.amOnPage('/myfriend');
  I.see('독일에서 한국어로 진료 받으세요');
});
