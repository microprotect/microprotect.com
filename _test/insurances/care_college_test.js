Feature('Care College insurance page');

Scenario('Show introduction', ({ I }) => {
  I.amOnPage('/insurances/care-college');
  I.see('해외 학생들의 요구사항만을 모아서 만든 상품');
});
