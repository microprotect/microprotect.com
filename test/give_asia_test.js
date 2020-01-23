Feature('GIVE.asia');

Scenario('Donate', (I) => {
  I.amOnPage('/free-insurance');
  I.click('Please Donate');
  I.seeElement('#givikiWidgetIframe');
});
