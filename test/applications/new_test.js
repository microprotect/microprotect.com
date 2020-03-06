Feature('New application page');

Scenario('Visit application form', (I) => {
  I.amOnPage('/applications/new');
  I.see('First name');
});
