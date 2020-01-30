Feature('About us');

Scenario('Visit about us page', (I) => {
  I.amOnPage('/about-us?version=3');
  I.see('Microprotect offers a way for more people');
});
