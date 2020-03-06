Feature('Home page');

Scenario('Guest visits home page', (I) => {
  I.amOnPage('/');
  I.see('전세계 40억 명의 저소득층을 위한 무료보험 플랫폼을 시작합니다');
});

Scenario('German browser', (I) => {
  I.amOnPage('/?locale=de');
  I.see('전세계 40억 명의 저소득층을 위한 무료보험 플랫폼을 시작합니다');
});
