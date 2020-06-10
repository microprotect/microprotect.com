Feature('Home page (old)');

Scenario('Guest visits home page', (I) => {
  I.amOnPage('/home');
  I.see('간편하게 카톡하세요');
});
