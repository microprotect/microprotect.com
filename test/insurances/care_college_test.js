Feature('Care College insurance page');

Scenario('Show introduction', (I) => {
  I.amOnPage('/insurances/care-college');
  I.see('해외 학생들의 요구사항만을 모아서 만든 상품');
});

Scenario('Visit insurance page', (I) => {
  I.amOnPage('/');
  I.click('해외 학생 보험');
  I.see('해외 학생들의 요구사항만을 모아서 만든 상품');
});
