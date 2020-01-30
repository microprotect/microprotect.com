Feature('Home page - Version #4');

Scenario('Guest visits home page', (I) => {
  I.amOnPage('/?version=4');
  I.see('Secure\nMore People\nEqually');
});

Scenario('German browser', (I) => {
  I.amOnPage('/?version=4&locale=de');
  I.see('We are people who contribute to the world with insurance');
});

Scenario('Change language', (I) => {
  I.amOnPage('/?version=4');
  I.click('Korean');
  I.see('우리는 보험으로 세상이 더 따뜻한 곳이 되도록 만들어가는 사람들입니다.');
  I.click('English');
  I.see('We are people who contribute to the world with insurance');
});
