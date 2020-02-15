Feature('Home page - Version #5');

Scenario('Guest visits home page', (I) => {
  I.amOnPage('/?version=5');
  I.see('First name');
});

Scenario('German browser', (I) => {
  I.amOnPage('/?version=5&locale=de');
  I.see('First name');
});
