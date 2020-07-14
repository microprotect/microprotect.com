Feature('About page');

Scenario('Slogan', (I) => {
  I.amOnPage('/about');

  I.see('About');
});
