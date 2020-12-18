Feature('Gemany page');

Scenario('Visit the germany page', ({ I }) => {
  I.amOnPage('/germany');

  I.seeElement('[href="https://microprotect.de/"]');
});
