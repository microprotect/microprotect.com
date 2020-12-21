Feature('Project pages');

Scenario('Click self-employed insurance', ({ I }) => {
  I.amOnPage('/en/');

  I.click('Self-employed insurance');

  I.waitForText('Partner Korea Credit Data (KCD)');

  I.see('Providing a general insurance service for KCD');
});

Scenario('Visit self-employed insurance', ({ I }) => {
  I.amOnPage('/en/projects/self-employed-insurance');

  I.see('Providing a general insurance service for KCD');
});

Scenario('Click credit default insurance', ({ I }) => {
  I.amOnPage('/en/');

  I.click('Credit Default Insurance');

  I.waitForText('with PEOPLE FUND');

  I.see('As a product that cooperates with the People Fund Company');
});

Scenario('Visit credit default insurance', ({ I }) => {
  I.amOnPage('/en/projects/credit-default-insurance');

  I.see('As a product that cooperates with the People Fund Company');
});

Scenario('Click compulsory insurance for foreign residents', ({ I }) => {
  I.amOnPage('/en/');

  I.click('Compulsory Insurance for Foreign Residents');

  I.waitForText('Partner Allianz');

  I.see('To stay in Germany for longer than 30 days');
});

Scenario('Visit compulsory insurance for foreign residents', ({ I }) => {
  I.amOnPage('/en/projects/compulsory-insurance');

  I.see('To stay in Germany for longer than 30 days');
});
