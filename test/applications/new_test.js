Feature('New application page');

Scenario('Visit application form', (I) => {
  I.amOnPage('/applications/new?version=5');
  I.see('First name');
});
