Feature('Home page');

Scenario('Guest visits home page', (I) => {
  I.amOnPage('/?version=3');
  I.see('Secure More People Equally');
});
