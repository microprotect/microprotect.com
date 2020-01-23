Feature('Free insurance page');

Scenario('Show free insurance page', (I) => {
  I.amOnPage('/free-insurance?version=3');
  I.see('Microprotect found and started a way to provide free insurance');
});
