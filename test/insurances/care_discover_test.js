Feature('Care Discover insurance page');

Scenario('Show introduction', (I) => {
  I.amOnPage('/insurances/care-discover');
  I.see('유럽식으로 의료비를 한도 없이 보장받자!');
});

Scenario('Visit insurance page', (I) => {
  I.amOnPage('/');
  I.click('해외 의료비 보험');
  I.see('유럽식으로 의료비를 한도 없이 보장받자!');
});
