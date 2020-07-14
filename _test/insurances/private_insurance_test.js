Feature('Private insurance page');

Scenario('Show introduction', (I) => {
  I.amOnPage('/insurances/private-insurance');
  I.see('가입부터 보험금 신청까지 카톡으로 OK');
});
