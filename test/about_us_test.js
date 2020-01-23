Feature('About us page');

Scenario('Show about us page', (I) => {
  I.amOnPage('/about-us?version=3');
  I.see('contribute to the world with insurance.');
});
