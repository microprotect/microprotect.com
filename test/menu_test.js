Feature('Menu');

Scenario('Open & close menu', (I) => {
  I.amOnPage('/?version=3');
  I.dontSee('Free Insurance', 'a');
  I.click('Menu');
  I.waitForVisible('#menu');
  I.wait(1);
  I.see('Free Insurance', 'a');
  I.click('Close');
  I.waitForInvisible('#menu');
  I.wait(1);
  I.dontSee('Free Insurance', 'a');
});
