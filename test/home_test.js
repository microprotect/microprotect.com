Feature('Home page');

Scenario('Guest visits home page', (I) => {
  I.amOnPage('/');
  I.see('Secure More People Equally');
});

Scenario('Change language', (I) => {
  I.amOnPage('/');
  I.click('Korean');
  I.see('독일에서 보험을 제공합니다');
  I.click('English');
  I.see('Offers insurance in Germany');
});

Scenario('German browser', (I) => {
  I.amOnPage('/?locale=de');
  I.see('Offers insurance in Germany');
});
