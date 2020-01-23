Feature('Home page');

Scenario('Guest visits home page', (I) => {
  I.amOnPage('/');
  I.see('Secure More People Equally');
});

Scenario('German browser', (I) => {
  I.amOnPage('/?locale=de');
  I.see('Free insurance');
});
