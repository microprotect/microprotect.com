Feature('Home page - Version #2');

Scenario('Guest visits home page', (I) => {
  I.amOnPage('/?version=2');
  I.see('Secure More People Equally');
});

Scenario('Change language', (I) => {
  I.amOnPage('/?version=2');
  I.click('Korean');
  I.see('독일에서 보험을 제공합니다');
  I.click('English');
  I.see('Offers insurance in Germany');
});

Scenario('German browser', (I) => {
  I.amOnPage('/?version=2&locale=de');
  I.see('Offers insurance in Germany');
});
