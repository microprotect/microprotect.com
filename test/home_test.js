Feature('Home page');

Scenario('Guest visits home page', (I) => {
  I.amOnPage('/');
  I.see('Microprotect');
});

Scenario('Korean browser', (I) => {
  I.amOnPage('/?locale=ko');
  I.see('우리는 보험으로 세상이 더 따뜻한 곳이 되도록 만들어가는 사람들입니다');
});

Scenario('German browser', (I) => {
  I.amOnPage('/?locale=de');
  I.see('We are people who contribute to the world with insurance');
});
