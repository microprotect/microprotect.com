Feature('Home page');

Scenario('Guest visits home page', (I) => {
  I.amOnPage('/');
  I.see('Secure\nMore People\nEqually');
});

Scenario('German browser', (I) => {
  I.amOnPage('/?locale=de');
  I.see('FREE INSURANCE');
});
