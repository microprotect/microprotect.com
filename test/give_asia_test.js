Feature('GIVE.asia');

Scenario('Donate', (I) => {
  I.amOnPage('/');
  I.click('Donate');
  I.seeElement('#givikiWidgetIframe');
});
