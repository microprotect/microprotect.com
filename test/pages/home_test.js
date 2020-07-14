Feature('Home page');

Scenario('Slogan', (I) => {
  I.amOnPage('/');

  I.see('insurance, redefined');
});
