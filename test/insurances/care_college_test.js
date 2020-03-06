Feature('Care College insurance page');

Scenario('Show introduction', (I) => {
  I.amOnPage('/insurances/care-college?version=5');
  I.see('유럽 유학생들의 요구사항만을 모아서 만든 상품');
});

Scenario('Visit insurance page', (I) => {
  I.amOnPage('/?version=5');
  I.click('유럽 유학생 보험');
  I.see('유럽 유학생들의 요구사항만을 모아서 만든 상품');
});
