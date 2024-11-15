const { test, expect } = require('@playwright/test');


test('Intercept network requests tag: @unit',async ({ page }) => {
      
    // Log and continue all network requests
    await page.route('**', route => {
      console.log(route.request().url());
      route.continue();
    });
    await page.goto('http://todomvc.com');
  });