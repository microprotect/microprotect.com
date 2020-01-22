Feature('Home page');

Scenario('Guest visits home page', (I) => {
  I.amOnPage('/?version=3');
  I.see('Secure More People Equally');
});

Scenario('German browser', (I) => {
  I.amOnPage('/?version=3&locale=de');
  I.see('Free insurance');
});
