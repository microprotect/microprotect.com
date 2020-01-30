Feature('Menu');

Scenario('Open & close menu', (I) => {
  I.amOnPage('/?version=3');
  I.dontSee('Free Insurance', 'a');
  I.click('Menu');
  I.waitForText('Subscription Insurance', '#menu');
  I.see('Free Insurance', 'a');
  I.click('Close');
  I.waitForInvisible('#menu');
  I.dontSee('Free Insurance', 'a');
});
