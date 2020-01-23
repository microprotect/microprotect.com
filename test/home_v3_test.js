Feature('Home page - Version #3');

Scenario('Guest visits home page', (I) => {
  I.amOnPage('/?version=3');
  I.see('Secure More People Equally');
});

Scenario('German browser', (I) => {
  I.amOnPage('/?version=3&locale=de');
  I.see('Free insurance');
});

Scenario('Open & close menu', (I) => {
  I.amOnPage('/?version=3');
  I.dontSee('Close');
  I.click('Menu');
  I.see('Close');
  I.click('Close');
  I.dontSee('Close');
});
