Feature('Free insurance page');

Scenario('Show free insurance page', ({ I }) => {
  I.amOnPage('/free-insurance?locale=en');
  I.see('FREE INSURANCE\nFOR LOW-INCOME PEOPLE');

  I.amOnPage('/free-insurance?locale=ko');
  I.see('저소득층에게 무료 보험 지원');
});
