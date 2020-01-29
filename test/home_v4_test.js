Feature('Home page - Version #4');

Scenario('Guest visits home page', (I) => {
  I.amOnPage('/?version=4');
  I.see('Secure\nMore People\nEqually');
});

Scenario('German browser', (I) => {
  I.amOnPage('/?version=4&locale=de');
  I.see('We are people who contribute to the world with insurance');
});
