Feature('Home page - Version #5');

Scenario('Guest visits home page', (I) => {
  I.amOnPage('/?version=5');
  I.see('당신이 보호받으면\n세상도 함께 보호받습니다');
});

Scenario('German browser', (I) => {
  I.amOnPage('/?version=5&locale=de');
  // TODO: change language.
  I.see('당신이 보호받으면\n세상도 함께 보호받습니다');
});
