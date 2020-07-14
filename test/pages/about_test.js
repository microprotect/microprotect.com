Feature('About page');

Scenario('Click our purpose', (I) => {
  I.amOnPage('/en/');

  I.click('See our purpose');

  I.see('get more people around the world to benefit from insurance');
});

Scenario('Visit our purpose', (I) => {
  I.amOnPage('/en/about/purpose');

  I.see('get more people around the world to benefit from insurance');
});

Scenario('Click our approach', (I) => {
  I.amOnPage('/en/');

  I.click('See our approach');

  I.see('Microprotect redefines insurance.');
});

Scenario('Visit our approach', (I) => {
  I.amOnPage('/en/about/approach');

  I.see('Microprotect redefines insurance.');
});
