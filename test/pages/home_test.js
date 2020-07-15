Feature('Home page');

Scenario('Slogan', (I) => {
  I.amOnPage('/en/');

  I.see('insurance, redefined');
});
