Feature('Project pages');

Scenario('Click self-employed insurance', (I) => {
  I.amOnPage('/en/');

  I.click('Self-employed insurance');

  I.see('Providing a general insurance service for KCD');
});

Scenario('Visit self-employed insurance', (I) => {
  I.amOnPage('/en/projects/self-employed-insurance');

  I.see('Providing a general insurance service for KCD');
});

Scenario('Click credit default insurance', (I) => {
  I.amOnPage('/en/');

  I.click('Credit Default Insurance');

  I.see('As a product that cooperates with the People Fund Company');
});

Scenario('Visit self-employed insurance', (I) => {
  I.amOnPage('/en/projects/credit-default-insurance');

  I.see('As a product that cooperates with the People Fund Company');
});
