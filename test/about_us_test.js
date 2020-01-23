Feature('About us');

Scenario('Visit about us page', (I) => {
  I.amOnPage('/about-us');
  I.see('Microprotect offers a way for more people');
});
