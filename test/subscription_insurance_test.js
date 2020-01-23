Feature('Subscription insurance page');

Scenario('Show subscription insurance page', (I) => {
  I.amOnPage('/subscription-insurance?version=3');
  I.see('Why should insurance be kept long?');
});
