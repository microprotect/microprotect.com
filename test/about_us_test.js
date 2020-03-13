Feature('About us');

Scenario('Visit about us page', (I) => {
  I.amOnPage('/about-us?locale=en');
  I.see('Chief Exeutive Officer • SANGMIN KWON');

  I.amOnPage('/about-us?locale=ko');
  I.see('대표이사 • 권상민');
});
