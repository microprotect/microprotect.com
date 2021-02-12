Feature('Home page');

Scenario('Slogan', ({ I }) => {
  I.amOnPage('/');

  I.see('Our experience insight and creativity');
});
