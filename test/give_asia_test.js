Feature('GIVE.asia');

Scenario('Donate', (I) => {
  I.amOnPage('/?version=4');
  I.click('Donate');
  I.seeElement('#givikiWidgetIframe');
});
