Feature('Partners');

Scenario('Visit the partners page', (I) => {
  I.amOnPage('/partners?locale=en');
  I.see('Balance Hero');

  I.amOnPage('/partners?locale=ko');
  I.see('밸런스 히어로');
});
